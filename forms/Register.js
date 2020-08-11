import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import * as SecureStore from 'expo-secure-store'

function Register({ route, dispatch, navigation }) {
    
    //Props from Route Params
    const setAuth = route.params.screenProps

    //Controlled inputs
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <Text>First Name</Text>
            <TextInput defaultValue={name} onChangeText={(name) => setName(name)}/>

            <Text>Email</Text>
            <TextInput defaultValue={email} onChangeText={(email) => setEmail(email)} />

            <Text>Password</Text>
            <TextInput defaultValue={password} onChangeText={(password) => setPassword(password)}/>
            
            <Button title="Submit" onPress={() => {
                const newAccount = {
                    first_name: name,
                    email: email,
                    password: password
                }

                const configObj = {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "accepts": "application/json"
                    },
                    body: JSON.stringify(newAccount)
                }

                fetch(`http://localhost:3000/users`, configObj)
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
            }}/>
        </View>
    )
}

export default connect((state)=>({state}))(Register)