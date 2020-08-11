import React from 'react'
import { connect } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { SplashScreenStackNavigator } from './navigators/StackNavigator'
import TabNavigator from './navigators/TabNavigator'
import * as SecureStore from 'expo-secure-store'

function AppRoot( { state, dispatch } ) {
  
  console.log("IN APP ROOT", state)

  //**TO DO** Check for persisting token
  // SecureStore.getItemAsync("token")
  // .then((token) => {
  //     if (token) {
  //         dispatch({
  //             type: "LOGIN",
  //             payload: token
  //         })
  //     }
  // })

  //Return Tab Navigator if logged in. Otherwise return Splash Screen.
  function renderTabs () {
    if (!state.auth.token) {
      return <TabNavigator />
    }

    else {
      return <SplashScreenStackNavigator />
    }
  }

  return (
    <NavigationContainer >
      {renderTabs()}
    </NavigationContainer>
  )
}

export default connect((state)=>({state}))(AppRoot)

