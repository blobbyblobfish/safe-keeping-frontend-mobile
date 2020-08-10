import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Profile from "../screens/Profile"
import About from "../screens/About"
import More from "../screens/More"
import Settings from "../screens/Settings"
import Trends from "../screens/Trends"
import DiaryCards from "../screens/DiaryCards"
import CopingSkills from "../screens/CopingSkills"
import HelpButton from '../screens/HelpButton'

import NewDiaryCard from '../forms/NewDiaryCard'
import NewDiaryCardTracker from '../forms/NewDiaryCardTracker'
import EditDiaryCard from '../forms/EditDiaryCard'
import NewEmergencyContact from '../forms/NewEmergencyContact'
import EditEmergencyContact from '../forms/EditEmergencyContact'
import NewTracker from '../forms/NewTracker'
import NewCopingSkill from '../forms/NewCopingSkill'
import EditCopingSkill from '../forms/EditCopingSkill'
import EditProfile from "../forms/EditProfile"

const Stack = createStackNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
}

const MoreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="New Emergency Contact" component={NewEmergencyContact} />
        <Stack.Screen name="Edit Emergency Contact" component={EditEmergencyContact} />
        <Stack.Screen name="Trends" component={Trends} />
        <Stack.Screen name="New Tracker" component={NewTracker} />
    </Stack.Navigator>
  )
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  )
}

const DiaryCardStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Diary Cards" component={DiaryCards} />
        <Stack.Screen name="New Diary Card" component={NewDiaryCard} />
        <Stack.Screen name="New Diary Card " component={NewDiaryCardTracker} />
        <Stack.Screen name="Edit Diary Card" component={EditDiaryCard} />
    </Stack.Navigator>
  )
}

const CopingSkillsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Coping Skills" component={CopingSkills} />
        <Stack.Screen name="New Coping Skill" component={NewCopingSkill} />
        <Stack.Screen name="Edit Coping Skill" component={EditCopingSkill} />
    </Stack.Navigator>
  )
}

const HelpButtonStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Help Button" component={HelpButton} />
  </Stack.Navigator>
  )
}

export {
  ProfileStackNavigator, MoreStackNavigator, DiaryCardStackNavigator,
  CopingSkillsStackNavigator, HelpButtonStackNavigator
}
