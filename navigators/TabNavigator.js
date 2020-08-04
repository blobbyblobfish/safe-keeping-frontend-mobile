import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CopingSkills from '../screens/CopingSkills.js'
import DiaryCards from '../screens/DiaryCards.js'
import HelpButton from '../screens/HelpButton.js'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (<Tab.Navigator>
        <Tab.Screen name="DiaryCards" component={DiaryCards} />
        <Tab.Screen name="HelpButton" component={HelpButton} />
        <Tab.Screen name="CopingSkills" component={CopingSkills} />
  </Tab.Navigator>)
}
