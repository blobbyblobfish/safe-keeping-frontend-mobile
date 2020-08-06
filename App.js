import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index.js'

import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigators/TabNavigator'

const store = createStore(rootReducer)

export default function App(props) {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  )
}

