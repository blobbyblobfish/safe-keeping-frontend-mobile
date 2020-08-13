import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import LandingPage from "../screens/LandingPage"
import Profile from "../screens/Profile"
import About from "../screens/About"
import More from "../screens/More"
import Settings from "../screens/Settings"
import Trends from "../screens/Trends"
import DiaryCards from "../screens/DiaryCards"
import CopingSkills from "../screens/CopingSkills"

import HelpButton from '../screens/HelpButton'
import ChooseASkill from '../screens/ChooseASkill'
import TryThisOne from '../screens/TryThisOne'
import UpNext from '../screens/UpNext'
import CallAFriend from '../screens/CallAFriend'
import CallATherapist from '../screens/CallATherapist'
import CallAHotline from '../screens/CallAHotline'

import Login from '../forms/Login'
import Register from '../forms/Register'
import NewDiaryCard from '../forms/NewDiaryCard'
import NewDiaryCardTracker from '../forms/NewDiaryCardTracker'
import EditDiaryCard from '../forms/EditDiaryCard'
import NewEmergencyContact from '../forms/NewEmergencyContact'
import EditEmergencyContact from '../forms/EditEmergencyContact'
import NewTracker from '../forms/NewTracker'
import NewCopingSkill from '../forms/NewCopingSkill'
import EditCopingSkill from '../forms/EditCopingSkill'
import EditAccount from "../forms/EditAccount"

const Stack = createStackNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back"
}

const LandingPageStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Safe Keeping" screenOptions={screenOptionStyle} >
      <Stack.Screen name="Safe Keeping" component={LandingPage} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Create An Account" component={Register} />
    </Stack.Navigator>
  )
}

const MoreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>  
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}

const ProfileStackNavigator = (screenProps) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Edit Account" component={EditAccount} initialParams={screenProps} />
        <Stack.Screen name="Trends" component={Trends} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="New Emergency Contact" component={NewEmergencyContact} />
        <Stack.Screen name="Edit Emergency Contact" component={EditEmergencyContact} />
        <Stack.Screen name="New Tracker" component={NewTracker} />
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
      <Stack.Screen name="Choose A Skill" component={ChooseASkill} />
      <Stack.Screen name="Try This One" component={TryThisOne} />
      <Stack.Screen name="What's Up Next?" component={UpNext} />
      <Stack.Screen name="Call A Friend" component={CallAFriend} />
      <Stack.Screen name="Call A Therapist" component={CallATherapist} />
      <Stack.Screen name="Call A Hotline" component={CallAHotline} />
      <Stack.Screen name="New Emergency Contact" component={NewEmergencyContact} />
  </Stack.Navigator>
  )
}

export {
  LandingPageStackNavigator, ProfileStackNavigator, MoreStackNavigator,
  DiaryCardStackNavigator, CopingSkillsStackNavigator, HelpButtonStackNavigator
}
