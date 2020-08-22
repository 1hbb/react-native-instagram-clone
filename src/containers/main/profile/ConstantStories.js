import React from 'react';
import {Text, View, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import StoryListItem from 'components/StoryListItem';
import colors from 'res/colors';
import images from 'res/images';

export default function ConstantStories() {
  return (
    <ScrollView horizontal={true}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          marginStart: 10,
          marginEnd: 10,
          marginTop: 10,
          marginBottom: 5,
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: colors.bottomBackGround,
              width: 64,
              height: 64,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#262626',
            }}>
            <Image
              source={images.addIcon}
              style={{width: 20, height: 20, borderRadius: 100}}
            />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            marginTop: 5,
          }}>
          New
        </Text>
      </View>
      <StoryListItem name="Holiday" />
    </ScrollView>
  );
}
