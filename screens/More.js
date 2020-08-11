import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Button } from 'react-native'
import * as SecureStore from 'expo-secure-store'

function More({ route, dispatch, navigation }) {
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  //Props from Route Params
  const setAuth = route.params.screenProps
  
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

              //reload App and send user to Splash page
              setAuth(false)

            }}
        />
    </View>
  )
}

export default connect((state)=>({state}))(More)