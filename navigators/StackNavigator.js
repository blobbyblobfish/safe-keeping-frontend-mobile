import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Profile from "../screens/Profile"
import About from "../screens/About"
import More from "../screens/More"
import Settings from "../screens/Settings"
import Trends from "../screens/Trends"
import EditAccountForm from "../forms/EditAccountForm"

const Stack = createStackNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditAccountForm} />
    </Stack.Navigator>
  )
}

const MoreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Trends" component={Trends} />
    </Stack.Navigator>
  )
}

export { ProfileStackNavigator, MoreStackNavigator }
