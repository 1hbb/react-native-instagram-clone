import React from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import DirectMessageSearch from './DirectMessageSearch';
import Title from './Title';
import MessageListItem from './MessageListItem';

const data = [
  {
    key: '1',
    name: 'john',
    message: 'risus commodo viverra',
  },
  {key: '2', name: 'lara', message: 'nulla aliquet enim tortor at'},
  {key: '3', name: 'jack', message: 'id donec ultrices tincidunt arcu'},
  {
    key: '4',
    name: 'barack',
    message: 'pellentesque habitant morbi',
  },
  {key: '5', name: 'carla', message: 'id ornare arcu odio ut'},
  {key: '6', name: 'juan', message: 'in mollis nunc sed id'},
  {key: '7', name: 'donna', message: 'in est ante in nibh'},
  {key: '8', name: 'marta', message: 'egestas erat imperdiet sed'},
  {key: '9', name: 'paula', message: 'dictum sit amet justo donec'},
  {key: '10', name: 'cardi', message: 'nisl suscipit adipiscing'},
  {key: '11', name: 'lana', message: 'volutpat est velit egestas dui'},
  {key: '12', name: 'robert', message: 'magna fermentum iaculis eu non'},
  {key: '13', name: 'george', message: 'fermentum posuere urna'},
  {key: '14', name: 'lara', message: 'facilisis leo vel fringilla est'},
  {key: '15', name: 'lara', message: 'quam viverra orci sagittis eu'},
];

export default function MessagesList() {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => <MessageListItem data={item} />}
    />
  );
}
