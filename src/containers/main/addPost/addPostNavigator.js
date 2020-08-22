import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import addPostScreen from './addPostScreen';
import colors from 'res/colors';
import {View, Text} from 'react-native';

export default function addPostNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add Post"
        component={addPostScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
        }}
      />
    </Stack.Navigator>
  );
}
