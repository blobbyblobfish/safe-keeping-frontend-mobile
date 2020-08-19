import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Button } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import styles from '../StyleSheet'

function More( { dispatch, navigation } ) {
  
  return (
      <View style={styles.container}>
          <Button
            title="About"
            onPress={() => navigation.navigate("About")} 
          />
          <Button
            title="Logout"
            onPress={() => {
              SecureStore.deleteItemAsync("token")

              //reset State
              dispatch({type: "LOGOUT", payload: {token: ''}})

            }}
        />
    </View>
  )
}

export default connect((state)=>({state}))(More)