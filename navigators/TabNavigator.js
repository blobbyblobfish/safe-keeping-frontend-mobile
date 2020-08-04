import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CopingSkills from '../screens/CopingSkills'
import DiaryCards from '../screens/DiaryCards'
import HelpButton from '../screens/HelpButton'
import { MoreStackNavigator, ProfileStackNavigator } from "./StackNavigator"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Diary" component={DiaryCards} />
        <Tab.Screen name="Skills" component={CopingSkills} />
        <Tab.Screen name="Help!" component={HelpButton} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
        <Tab.Screen name="More" component={MoreStackNavigator} />
  </Tab.Navigator>)
}
