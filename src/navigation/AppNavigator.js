import { createStackNavigator } from 'react-navigation';

/* screen */
import MainTabNavigator from 'app/src/navigation/MainTabNavigator';
import UserScreen from 'app/src/screens/UserScreen';
import TagScreen from 'app/src/screens/TagScreen';
import PostScreen from 'app/src/screens/PostScreen';
import TakeScreen from 'app/src/screens/TakeScreen';
import TakePublishScreen from 'app/src/screens/TakePubulishScreen';

/* from app */
import IconButton from 'app/src/components/IconButton';

// 撮影・メディアの選択から投稿までのスクリーンを持つ StackNavigator を定義
const TakeStack = createStackNavigator(
  {
    Take: { screen: TakeScreen },
    TakePublish: { screen: TakePublishScreen },
  },
  {
    headerMode: 'screen',
  },
);

// メインの TabNavigator とユーザー詳細、タグ検索、投稿詳細スクリーンを持つ StackNavigator
const CardNavigator = createStackNavigator(
  {
    Main: { screen: MainTabNavigator, navigationOptions: { header: null } },
    User: { screen: UserScreen },
    Tag: { screen: TagScreen },
    Post: { screen: PostScreen },
  },
  {
    navigationOptions: () => ({
      headerTitleStyl: {
        color: '#333',
      },
      headerLeft: IconButton,
    }),
  },
);

// CardNavigator と TakeStack を持つ StackNavigator
const AppNavigator = createStackNavigator(
  {
    MainStack: {
      screen: CardNavigator,
      navigationOptions: {
        header: null,
      },
    },
    TakeModel: {
      screen: TakeStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: () => ({
      headerTitleStyle: {
        color: '#333',
      },
    }),
  },
);

export default AppNavigator;
