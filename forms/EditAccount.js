import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, Button, Alert } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import styles from '../StyleSheet'

function EditAccount({ state, navigation, dispatch }) {

  //Controlled inputs
  const [name, setName] = useState(state.auth.firstName)
  const [email, setEmail] = useState(state.auth.email)
  
  //Confirm alert
  function confirmAlert() {
    Alert.alert(
        "Are you sure?",
        "This action cannot be undone", 
      [
            {
                text: "Cancel",
                style: "cancel",
                onPress: () => { }
            },
            {
                text: "Delete",
                onPress: () => {
                  fetch(`http://localhost:3000/users/${state.auth.id}`, { method: "DELETE" })
                    .then(resp => resp.json())
                    .then(json => {
                      
                      SecureStore.deleteItemAsync("token")
                      dispatch({ type: "LOGOUT", payload: { token: '' } })
                    })
                    .catch(console.log)
                  
                }
            }
        ]
    )
  }
  
  return (
    <View style={styles.container}>
      
      <Text style={{color: 'gray', marginBottom: 10}} >Name</Text>
      <TextInput style={{marginBottom: 20}} autoCapitalize={'none'} defaultValue={name} onChangeText={name => setName(name)} />

      <Text style={{color: 'gray', marginBottom: 10}} >Email</Text>
      <TextInput style={{marginBottom: 30}} autoCapitalize={'none'} defaultValue={email} onChangeText={email => setEmail(email)} />

      <Button title="Submit" onPress={() => {
        console.log("In submit")
        const updatedUser = {
          id: state.auth.id,
          first_name: name,
          email: email
        }

        // **TO DO** Bug fix: this doesn't work in iOS. Possibly has to do with "non serializable values" error
        const configObj = {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accepts": "application/json"
          },
          body: JSON.stringify(updatedUser)
        }

        fetch(`http:///localhost:3000/users/${state.auth.id}`, configObj)
          .then(resp => resp.json())
          .then(json => {
            console.log(json)

            dispatch({type: "UPDATE_ACCOUNT", payload: json})
            navigation.navigate("Profile")
          })
          .catch(console.log)
        
      }} />

      <View style={{paddingTop: 80}}>
      <Button title="Delete Account" onPress={confirmAlert}/>
      </View>
      
    </View>
  )
}

export default connect((state)=>({state}))(EditAccount)