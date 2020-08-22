import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from 'res/colors';

export default function PostLikes({post}) {
  return (
    <TouchableOpacity
      onPress={() => console.log('Pressed Post Likes')}
      style={{marginLeft: 15, marginTop: 10, marginEnd: 15}}>
      <Text style={{color: colors.text, fontWeight: 'bold'}}>
        {post.likeCount} likes{' '}
      </Text>
    </TouchableOpacity>
  );
}
