import React from 'react';
import {View, Image} from 'react-native';

export default function StoryScreen() {
  return (
    <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center'}}>
      <Image
        source={{uri: 'https://picsum.photos/600'}}
        style={{
          height: 512,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
}
