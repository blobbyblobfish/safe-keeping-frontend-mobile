import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  CopingSkillsStackNavigator, DiaryCardStackNavigator, MoreStackNavigator,
  HelpButtonStackNavigator, ProfileStackNavigator
} from "./StackNavigator"

function TabNavigator(props) {

  //Utility
  const Tab = createBottomTabNavigator()
  const dispatch = props.dispatch

  //Load data
  useEffect(() => {
    fetch("http://localhost:3000/users/5")
      .then(resp => resp.json())
      .then(json => {
        const user = { id: json.id, first_name: json.first_name, email: json.email }
        const copingSkills = json.coping_skills
        const diaryCards = json.diary_cards
        const emergencyContacts = json.emergency_contacts
        const trackers = json.trackers
        
        dispatch({
          type: "SET_USER",
          payload: user
        })

        dispatch({
          type: "SET_COPING_SKILLS",
          payload: copingSkills
        })

        dispatch({
          type: "SET_DIARY_CARDS",
          payload: diaryCards
        })

        dispatch({
          type: "SET_EMERGENCY_CONTACTS",
          payload: emergencyContacts
        })

        dispatch({
          type: "SET_TRACKERS",
          payload: trackers
        })

      })
  }, [])

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
export default connect(state => ({state}))(TabNavigator)