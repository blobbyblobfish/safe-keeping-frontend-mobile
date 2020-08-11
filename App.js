import React, { useState } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index.js'

import { NavigationContainer } from '@react-navigation/native'
import { SplashScreenStackNavigator } from './navigators/StackNavigator'
import TabNavigator from './navigators/TabNavigator'

export default function App() {
  
  //Utility
  const store = createStore(rootReducer)
  const [auth, setAuth] = useState(false)

  //Return Tab Navigator if logged in. Otherwise return Splash Screen.
  function renderTabs () {
    if (!auth) {
      return <TabNavigator screenProps={setAuth} />
    }

    else {
      return <SplashScreenStackNavigator screenProps={setAuth} />
    }
  }

  return (
    <Provider store={store}>
      <NavigationContainer >
        {renderTabs()}
      </NavigationContainer>
    </Provider>
  )
}

