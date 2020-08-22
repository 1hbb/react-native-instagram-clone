import React from 'react';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import homeScreen from './homeScreen';
import StoryScreen from './story/StoryScreen';
import StoryCamera from './StoryCamera/StoryCamera';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import palette from 'res/palette';
import images from 'res/images';
import colors from '../../../res/colors';
import DirectMessageScreen from './DirectMessage/DirectMessageScreen';

export default function () {
  const Stack = createStackNavigator();
  StatusBar.setBarStyle('light-content');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={homeScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
          headerLeft: () => (
            <View style={Styles.headerLeftContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('StoryCameraScreen')}>
                <Image
                  source={images.photo_camera}
                  style={Styles.headerLeftImage}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View>
              <TouchableOpacity
                style={Styles.headerRightContainer}
                onPress={() => navigation.navigate('DirectMessageScreen')}>
                <Image
                  source={images.direct_message}
                  style={Styles.headerRightImage}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: (
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={images.logo}
                style={{width: 110, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {alignSelf: 'center'},
        })}
      />
      <Stack.Screen name="Story" component={StoryScreen} />
      <Stack.Screen
        name="StoryCamera"
        component={StoryCamera}
        options={{gestureDirection: 'horizontal-inverted'}} //for left to right transition
      />
    </Stack.Navigator>
  );
}

const Styles = StyleSheet.create({
  headerLeftContainer: palette.header.headerLeftContainer,
  headerLeftImage: palette.header.headerLeftImage,
  headerRightContainer: palette.header.headerRightContainer,
  headerRightImage: palette.header.headerRightImage,
});
