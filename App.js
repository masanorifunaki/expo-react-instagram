import React, { useState }        from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading }             from 'expo';
import { Asset }                  from 'expo-asset';
import * as Font                  from 'expo-font';

/* from app */
import fonts                      from 'app/src/fonts';
import images                     from 'app/src/images';

const App = () => {
  const [skipLoadingScreen, setSkipLoadingScreen] = useState(false);
  const [isLoadingComplete, setLoadingComplete]   = useState(false);

  const loadResourcesAsync = async () => {
    // ローカルフォルダーから画層をロード
    await Asset.loadAsync(Object.keys(images)
      .map(key => images[key]));
    // ローカルフォルダからフォントをロード
    await Font.loadAsync(fonts);

    return true;
  };

  if ( !isLoadingComplete && !skipLoadingScreen ) {
    return (
      <AppLoading startAsync={loadResourcesAsync}
                  onError={error => console.warn(error)}
                  onFinish={() => setLoadingComplete(true)}/>
    );
  }

  return (
    <View style={{
      flex          : 1,
      alignItems    : 'center',
      justifyContent: 'center'
    }}>
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
