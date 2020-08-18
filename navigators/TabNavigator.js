import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  ProfileStackNavigator, MoreStackNavigator,
  DiaryCardStackNavigator, CopingSkillsStackNavigator, HelpButtonStackNavigator
} from "./StackNavigator"

export default function TabNavigator() {
  
  //Utility
  const Tab = createBottomTabNavigator()  

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName

            if (route.name === 'Diary') {
              iconName = focused
                ? 'ios-journal'
                : 'ios-journal'
            } else if (route.name === 'Skills') {
              iconName = focused ? 'ios-trophy' : 'ios-trophy'
            } else if (route.name === 'Help!') {
                iconName = focused ? 'ios-alert' : 'ios-alert'
            } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person' : 'ios-person'
            } else if (route.name === 'More') {
                iconName = focused ? 'ios-list' : 'ios-list'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4f98f0',
          inactiveTintColor: 'gray',
        }}
    >
      <Tab.Screen name="Diary" component={DiaryCardStackNavigator} />
      <Tab.Screen name="Skills" component={CopingSkillsStackNavigator} />
      <Tab.Screen name="Help!" component={HelpButtonStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      <Tab.Screen name="More" component={MoreStackNavigator} />
    </Tab.Navigator>
  )
}
