import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import * as SecureStore from 'expo-secure-store'

function Login({ route, navigation, state, dispatch }) {
    
    //Props from Route Params
    const setAuth = route.params.screenProps

    //Controlled inputs
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <Text>Login</Text>
            <Text>Email</Text>
            <TextInput defaultValue={email} onChangeText={(email) => setEmail(email)} />
            <Text>Password</Text>
            <TextInput defaultValue={password} onChangeText={(password) => setPassword(password)}/>
            <Button title="Submit" onPress={() => {
                const credentials = {
                    email: email,
                    password: password
                }

                const configObj = {
                    method: "POST", 
                    headers: {
                        "content-type": "application/json",
                        "accepts": "application/json"
                    },
                    body: JSON.stringify(credentials)
                }

                fetch(`http://localhost:3000/users/login`, configObj)
                    .then(resp => resp.json())
                    .then(json => {
                        if (json.token) {
                            dispatch({
                                type: "LOGIN",
                                payload: json
                            })
                        }

                        setAuth(!!json.token)

                        SecureStore.setItemAsync("token", json.token)

                        navigation.navigate("Safe Keeping")
                    })
                    .catch(console.log)
                
            }}/>
        </View>)
}

export default connect((state)=>({state}))(Login)