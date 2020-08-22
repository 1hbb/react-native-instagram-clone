import React from 'react';
import {Text, View, StyleSheet, Vibration} from 'react-native';
import colors from 'res/colors';

export default function PostText({post}) {
  return (
    <View
      style={{
        marginStart: 15,
        marginEnd: 15,
        flexDirection: 'column',
        marginTop: 10,
      }}>
      <Text style={{color: colors.text, fontWeight: 'bold', fontSize: 13}}>
        {post.userName}
      </Text>
      <Text style={{color: colors.text}}>{post.text}</Text>
    </View>
  );
}
