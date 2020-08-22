import React from 'react';
import {View, Text} from 'react-native';
import palette from 'res/palette';

export default function addPostScreen() {
  return (
    <View style={palette.container.center}>
      <Text style={palette.text}>Add Post</Text>
    </View>
  );
}
