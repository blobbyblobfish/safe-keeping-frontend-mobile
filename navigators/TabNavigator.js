import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  CopingSkillsStackNavigator, DiaryCardStackNavigator, MoreStackNavigator,
  HelpButtonStackNavigator, ProfileStackNavigator
} from "./StackNavigator"

function TabNavigator(props) {

  const Tab = createBottomTabNavigator()

  //Load data
  useEffect(() => {
    fetch("http://localhost:3000/users/5")
      .then(resp => resp.json())
      .then(json => {
        const user = { id: json.id, first_name: json.first_name, email: json.email }
        const diaryCards = json.diary_cards
        
        props.dispatch({
          type: "SET_USER",
          payload: user
        })
        
        props.dispatch({
          type: "SET_DIARY_CARDS",
          payload: diaryCards
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