import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  ProfileStackNavigator, MoreStackNavigator,
  DiaryCardStackNavigator, CopingSkillsStackNavigator, HelpButtonStackNavigator
} from "./StackNavigator"

export default function TabNavigator() {
  //Utility
  const Tab = createBottomTabNavigator()  

  return (
    <Tab.Navigator>
      <Tab.Screen name="Diary" component={DiaryCardStackNavigator} />
      <Tab.Screen name="Skills" component={CopingSkillsStackNavigator} />
      <Tab.Screen name="Help!" component={HelpButtonStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      <Tab.Screen name="More" component={MoreStackNavigator} />
    </Tab.Navigator>
  )
}
