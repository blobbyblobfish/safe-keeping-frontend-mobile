import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CopingSkills from './screens/CopingSkills.js'
import DiaryCards from './screens/DiaryCards.js'
import HelpButton from './screens/HelpButton.js'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="DiaryCards" component={DiaryCards} />
        <Tab.Screen name="HelpButton" component={HelpButton} />
        <Tab.Screen name="CopingSkills" component={CopingSkills} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

