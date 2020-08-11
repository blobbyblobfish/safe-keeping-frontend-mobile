import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index.js'
import AppRoot from './AppRoot'

export default function App() {

    const store = createStore(rootReducer)

    return (
        <Provider store={store}>
          <AppRoot />
        </Provider>
    )
}