import React from 'react';
import {View, Text} from 'react-native';
import DirectMessageScreen from './DirectMessageScreen';

export default function Title() {
  return (
    <View style={{marginTop: 10, marginStart: 10}}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        Messages
      </Text>
    </View>
  );
}
