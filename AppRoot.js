import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { LandingPageStackNavigator } from './navigators/StackNavigator'
import TabNavigator from './navigators/TabNavigator'
import * as SecureStore from 'expo-secure-store'

function AppRoot( { state, dispatch } ) {
  
  console.log("IN APP ROOT", state)

  //Check for persisting token
  useEffect(() => {

    // ** SHORTCUT **
    // fetch('https://safe-keeping-backend.herokuapp.com/users/30')
    //   .then(resp => resp.json())
    //   .then(json => {
    //     console.log(json)
    //     dispatch({type: "LOGIN", payload: {token: "abc", user: json}})
    //   })
    //   .catch(console.log) 
    
    SecureStore.getItemAsync("token")
    .then((token) => {
      if (token) {
        const id = token.slice(84)
        
        fetch(`https://safe-keeping-backend.herokuapp.com/users/${id}`)
          .then(resp => resp.json())
          .then(json => {
            
            const copingSkills = json.coping_skills
            const diaryCards = json.diary_cards
            const emergencyContacts = json.emergency_contacts
            const trackers = json.trackers
            // Modify backend serialization and fetch therapists

            dispatch({
              type: "PERSIST_LOGIN",
              payload: {
                 token: token,
                 user: json
              }
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
          })
          .catch(console.log)
      }
    })
  }, [])

  //Return Tab Navigator if logged in. Otherwise return Splash Screen.
  function renderTabs () {
    if (state.auth.token) {
      return <TabNavigator />
    }

    else {
      return <LandingPageStackNavigator />
    }
  }

  return (
    <NavigationContainer >
      {renderTabs()}
    </NavigationContainer>
  )
}

export default connect((state)=>({state}))(AppRoot)

