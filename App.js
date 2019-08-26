import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

/* from app */
import fonts from 'app/src/fonts';
import images from 'app/src/images';
import AppNavigator from 'app/src/navigation/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [skipLoadingScreen, setSkipLoadingScreen] = useState(false);
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const loadResourcesAsync = async () => {
    // ローカルフォルダーから画層をロード
    await Asset.loadAsync(Object.keys(images)
      .map((key) => images[key]));
    // ローカルフォルダからフォントをロード
    await Font.loadAsync(fonts);

    return true;
  };

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={(error) => console.warn(error)}
        onFinish={() => setLoadingComplete(true)}
      />
    );
  }

  return (
    <AppContainer />
  );
};

export default App;
