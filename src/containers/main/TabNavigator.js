import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import images from 'res/images';
import {Image, StatusBar} from 'react-native';
import palette from 'res/palette';
import colors from 'res/colors';

import homeNavigator from './home/homeNavigator';
import activityNavigator from './activity/activityNavigator';
import addPostNavigator from './addPost/addPostNavigator';
import profileNavigator from './profile/profileNavigator';
import searchNavigator from './search/searchNavigator';

export default function TabNavigator({NavigateToStoryCamera}) {
  const Tab = createBottomTabNavigator();
  return (
    <React.Fragment>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: colors.bottomBackGround,
            borderTopColor: colors.seperatorLineColor,
          },
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? images.home_selected : images.home;
            } else if (route.name === 'Search') {
              iconName = focused ? images.search_selected : images.search;
            } else if (route.name === 'AddPost') {
              iconName = focused ? images.add_selected : images.add;
            } else if (route.name === 'Activity') {
              iconName = focused ? images.activity_selected : images.activity;
            } else if (route.name === 'Profile') {
              iconName = focused ? images.profile_selected : images.profile;
            }

            return <Image style={palette.header.image} source={iconName} />;
          },
        })}>
        <Tab.Screen name="Home" component={homeNavigator} />
        <Tab.Screen name="Search" component={searchNavigator} />
        <Tab.Screen name="AddPost" component={addPostNavigator} />
        <Tab.Screen name="Activity" component={activityNavigator} />
        <Tab.Screen name="Profile" component={profileNavigator} />
      </Tab.Navigator>
    </React.Fragment>
  );
}
