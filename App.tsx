import 'react-native-gesture-handler';
import React from 'react';
import {StackNavigator} from './src/navigation/MainNavigation';
import {TabsNavigation} from './src/navigation/TabsNavigation';

const App = () => {
  return <TabsNavigation />;
};

export default App;
