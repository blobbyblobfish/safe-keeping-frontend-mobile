import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, Button } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import styles from '../StyleSheet'

function Login({ state, dispatch }) {
    
    //Controlled inputs
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
    <View style={styles.container}>

    <Text>Email</Text>
    <TextInput autoCapitalize={'none'} defaultValue={email} onChangeText={(email) => setEmail(email)} />
    
    <Text>Password</Text>
    <TextInput autoCapitalize={'none'} defaultValue={password} onChangeText={(password) => setPassword(password)}/>
    
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
                const copingSkills = json.user.coping_skills
                const diaryCards = json.user.diary_cards
                const emergencyContacts = json.user.emergency_contacts
                const trackers = json.user.trackers

                if (json.token) {
                    const tokenId = `${json.token}${json.user.id}`
                    SecureStore.setItemAsync("token", tokenId)

                    dispatch({
                        type: "LOGIN",
                        payload: json
                    })
                }

                if (copingSkills) {
                    dispatch({
                        type: "SET_COPING_SKILLS",
                        payload: copingSkills
                    })
                }

                if (diaryCards) {
                    dispatch({
                        type: "SET_DIARY_CARDS",
                        payload: diaryCards
                    })
                }

                if (emergencyContacts) {
                    dispatch({
                        type: "SET_EMERGENCY_CONTACTS",
                        payload: emergencyContacts
                    })
                }

                if (trackers) {
                    dispatch({
                        type: "SET_TRACKERS",
                        payload: trackers
                    })
                }
            })
            .catch(console.log)
        
    }}/>
    
    </View>)
}

export default connect((state)=>({state}))(Login)