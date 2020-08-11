import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as SecureStore from 'expo-secure-store'

import {
  ProfileStackNavigator, MoreStackNavigator,
  DiaryCardStackNavigator, CopingSkillsStackNavigator, HelpButtonStackNavigator
} from "./StackNavigator"

function TabNavigator( { state, dispatch, screenProps } ) {

  //Utility
  const Tab = createBottomTabNavigator()
  const setAuth = screenProps
  
  //Load data
  useEffect(() => {
    // fetch(`http://localhost:3000/users/${state.auth.id}`)
    fetch(`http://localhost:3000/users/5`)
      .then(resp => resp.json())
      .then(json => {
        const copingSkills = json.coping_skills
        const diaryCards = json.diary_cards
        const emergencyContacts = json.emergency_contacts
        const trackers = json.trackers

        //TEST
        dispatch({
          type: "LOGIN",
          payload: {token: "abc", user: {id: 5, first_name: "Alice", email: "alice@email.com"}}
        })

        if (copingSkills) {
          dispatch({
            type: "SET_COPING_SKILLS",
            payload: copingSkills
          })
        }

        if (diaryCards) {
          dispatch({
            type: "SET_DIARY_CARDS",
            payload: diaryCards
          })
        }

        if (emergencyContacts) {
          dispatch({
            type: "SET_EMERGENCY_CONTACTS",
            payload: emergencyContacts
          })
        }

        if (trackers) {
          dispatch({
            type: "SET_TRACKERS",
            payload: trackers
          })
        }

      }
    )
  }, [])

  return (
    <Tab.Navigator>
      <Tab.Screen name="Diary" component={DiaryCardStackNavigator} />
      <Tab.Screen name="Skills" component={CopingSkillsStackNavigator} />
      <Tab.Screen name="Help!" component={HelpButtonStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      <Tab.Screen name="More" children={() => <MoreStackNavigator screenProps={setAuth} />} />
    </Tab.Navigator>
  )
}
export default connect(state => ({state}))(TabNavigator)