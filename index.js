import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigator from './src/AppNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

function Root() {
  return <App />;
}

AppRegistry.registerComponent(appName, () => Root);
