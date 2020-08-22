import React from 'react';
import {View, Image, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const data = [
  {key: '1'},
  {key: '2'},
  {key: '3'},
  {key: '4'},
  {key: '5'},
  {key: '6'},
  /*{key: '7'},
  {key: '8'},
  {key: '9'},
  {key: '10'},
  {key: '11'},
  {key: '12'},
  {key: '13'},
  {key: '14'},*/
];

function Test() {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => console.log('Pressed Profile Grid Image')}>
        <Image
          source={{uri: 'https://picsum.photos/1920/1080'}}
          style={{
            height: 150,
            flex: 1,
            marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function ProfileGrid() {
  return (
    <FlatList
      data={data}
      style={{marginTop: 2, marginStart: 2}}
      renderItem={({item, index}) => <Test />}
      numColumns={3}
      indicatorStyle={'white'}
      showsVerticalScrollIndicator={true}
    />
  );
}
