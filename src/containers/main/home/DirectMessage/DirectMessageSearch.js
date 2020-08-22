import React from 'react';
import {View, Dimensions, TextInput, Text} from 'react-native';
import colors from 'res/colors';

export default function DirectMessageSearch() {
  return (
    <View>
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.textFaded2}
        style={{
          backgroundColor: colors.textInputBackground,
          height: 40,
          borderRadius: 10,
          marginHorizontal: 10,
          marginVertical: 10,
          fontWeight: 'bold',
          paddingStart: 10,
          fontSize: 16,
          color: 'white',
        }}
      />
    </View>
  );
}
