import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  CopingSkillsStackNavigator, DiaryCardStackNavigator, MoreStackNavigator,
  HelpButtonStackNavigator, ProfileStackNavigator
} from "./StackNavigator"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Diary" component={DiaryCardStackNavigator} />
        <Tab.Screen name="Skills" component={CopingSkillsStackNavigator} />
        <Tab.Screen name="Help!" component={HelpButtonStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
        <Tab.Screen name="More" component={MoreStackNavigator} />
  </Tab.Navigator>)
}
