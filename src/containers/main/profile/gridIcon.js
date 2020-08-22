import React from 'react';
import {Image, View} from 'react-native';
import images from 'res/images';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function GridIcon() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
      }}>
      <TouchableOpacity>
        <Image source={images.grid} style={{width: 25, height: 25}} />
      </TouchableOpacity>
    </View>
  );
}
