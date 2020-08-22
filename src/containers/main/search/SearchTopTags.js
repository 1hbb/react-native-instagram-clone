import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import colors from 'res/colors';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const data = [
  {key: '1', tag: 'IGTV'},
  {key: '2', tag: 'Travel'},
  {key: '3', tag: 'Architecture'},
  {key: '4', tag: 'Store'},
  {key: '5', tag: 'Decoration'},
  {key: '6', tag: 'Art'},
  {key: '7', tag: 'Food'},
  {key: '8', tag: 'Stil'},
  {key: '9', tag: 'TV and Movies'},
  {key: '10', tag: 'Do it Yourself'},
  {key: '11', tag: 'Comedy'},
  {key: '12', tag: 'Music'},
];

function TagContainer({tag}) {
  return (
    <TouchableOpacity onPress={() => console.log('Pressed Search Tag')}>
      <View
        style={{
          height: 30,
          borderWidth: 1.5,
          borderColor: colors.seperatorLineColor,
          borderRadius: 8,
          justifyContent: 'center',
          marginBottom: 10,
          backgroundColor: '#000',
          marginHorizontal: 5,
        }}>
        <Text
          style={{
            color: 'white',
            marginHorizontal: 15,
            fontWeight: 'bold',
          }}>
          {tag}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function SearchTopTags() {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{backgroundColor: colors.bottomBackGround}}
      data={data}
      renderItem={({item, index}) => <TagContainer tag={item.tag} />}
    />
  );
}
