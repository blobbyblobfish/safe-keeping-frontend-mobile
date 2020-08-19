import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { YellowBox } from 'react-native'
import rootReducer from './reducers/index.js'
import AppRoot from './AppRoot'


export default function App() {
  
  YellowBox.ignoreWarnings([""])

    const store = createStore(rootReducer)

    return (
        <Provider store={store}>
          <AppRoot />
        </Provider>
    )
}