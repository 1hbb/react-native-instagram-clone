import React from 'react';
import {View, Text} from 'react-native';
import palette from 'res/palette';

export default function activityScreen() {
  return (
    <View style={palette.container.center}>
      <Text style={palette.text}>Activity</Text>
    </View>
  );
}
