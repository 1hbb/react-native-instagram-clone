import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigator from './src/AppNavigator';
import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//StatusBar.setBarStyle('light-content');
//StatusBar.setBackgroundColor('#000');
//const Navigation = <NavigationContainer> {AppNavigator} </NavigationContainer>;
function Root() {
  return <NavigationContainer>{<AppNavigator />}</NavigationContainer>;
}

AppRegistry.registerComponent(appName, () => Root);
