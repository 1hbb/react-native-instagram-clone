import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../res/colors';

export default function EditProfileButton() {
  return (
    <TouchableOpacity>
      <View style={{marginTop: 10}}>
        <View
          style={{
            flex: 1,
            height: 30,
            borderRadius: 5,
            marginStart: 10,
            marginEnd: 10,
            backgroundColor: '#000',
            justifyContent: 'center',
            borderColor: '#262626',
            borderWidth: 1,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'white'}}>Edit Profile</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
