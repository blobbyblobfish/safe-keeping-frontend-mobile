// import React, { useState } from 'react'
// import { connect } from 'react-redux'
// import { Text, TextInput, View, Button } from 'react-native'
// import * as SecureStore from 'expo-secure-store'
// import styles from '../StyleSheet'

// function Login({ dispatch }) {
    
//     //Controlled inputs
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     return (
//     <View style={styles.container}>

//     <Text style={{paddingBottom: 10}}>Email</Text>
//     <TextInput autoCapitalize={'none'} placeholder={'email@email.com'} style={{height: 40, width: 200, paddingBottom: 20}}
//         defaultValue={email} onChangeText={(email) => setEmail(email)} />
    
//     <Text style={{paddingBottom: 10}}>Password</Text>
//     <TextInput secureTextEntry autoCapitalize={'none'} placeholder={'********'}style={{width: 200, height: 40}}
//         defaultValue={password} onChangeText={(password) => setPassword(password)} />
    
//     <Button title="Submit" onPress={() => {
//         const credentials = {
//             email: email,
//             password: password
//         }

//         const configObj = {
//             method: "POST", 
//             headers: {
//                 "content-type": "application/json",
//                 "accepts": "application/json"
//             },
//             body: JSON.stringify(credentials)
//         }

//         fetch(`https://safe-keeping-backend.herokuapp.com/users/login`, configObj)
//             .then(resp => resp.json())
//             .then(json => {
//                 const copingSkills = json.user.coping_skills
//                 const diaryCards = json.user.diary_cards
//                 const emergencyContacts = json.user.emergency_contacts
//                 const trackers = json.user.trackers

//                 if (json.token) {
//                     const tokenId = `${json.token}${json.user.id}`
//                     SecureStore.setItemAsync("token", tokenId)

//                     dispatch({
//                         type: "LOGIN",
//                         payload: json
//                     })
//                 }

//                 if (copingSkills) {
//                     dispatch({
//                         type: "SET_COPING_SKILLS",
//                         payload: copingSkills
//                     })
//                 }

//                 if (diaryCards) {
//                     dispatch({
//                         type: "SET_DIARY_CARDS",
//                         payload: diaryCards
//                     })
//                 }

//                 if (emergencyContacts) {
//                     dispatch({
//                         type: "SET_EMERGENCY_CONTACTS",
//                         payload: emergencyContacts
//                     })
//                 }

//                 if (trackers) {
//                     dispatch({
//                         type: "SET_TRACKERS",
//                         payload: trackers
//                     })
//                 }
//             })
//             .catch(console.log)
        
//     }}/>
    
//     </View>)
// }

// export default connect((state)=>({state}))(Login)