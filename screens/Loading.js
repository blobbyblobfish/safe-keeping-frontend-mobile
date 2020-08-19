import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { View, ActivityIndicator } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import styles from '../StyleSheet'

function Loading({ dispatch, route }) {
    
    const json = route.params.json
    // const imgUrl = "https://lh3.googleusercontent.com/UIr5LnV0t-vC7Osp_TdYkgv7U2xcA1IZ7N7ZsPJ8aSWFfqUFkhAAKphciuUAnhCiU4ODxPeKfOW43npnaOj-1RQI5J5UM5ANpFGlGqRiDx37PRNt5XJG2U03LVhJJrIn2YRo-zkZq5xaqNsWBJ7102n8jafp-IIWRT3VSWvG6J9J1iDcM_a4pQDp-oNQNptd3HfrzOoYuk4W0dxqPfaRhevtFldDktAhEwgfo3_EZ_uvpF_hwZgf0lSBDqzUofIxXSFZvFKzFaADtvK0csKeXmI9jpw_4zdu95pX3r-U6xbpRdnzRnZgyUNcrcFnB1KH6nvkS8WXUbyU1jQsefxblriS8INogkvC_2ZMBrkcXElRycj45_6U2lNEmJwxRW8HXGo4tksPjlN08IgZDsJdl0KT6NtYnUOUgkW7pFxPx9Q0GWh8tVzTXT-PNybwmW2MH3cJiZM26ll-ypTN_wONb60oX8n5oeF5yITgN78Ln1LBI6NS2XAOMvhGdJ6qPJ0mN3pN1jABo3SYQVQua6dVqM9IloqFyg4aTVmWVdnS2GCKwvmPMPwlu8L3JtXGLBYcBjfYPgXlWq145fUNCIcTxTlG6_rrBYtd40OJY205cYmZ_Q-8rBtSbDJtsMl0FQydy84xXhaDDqw3RsIu81iQTUy5mbWUVlBWhuCSUk81pfMxiYFbOpqd9hPjUR5vag=w403-h739-no?authuser=0"

    useEffect(() => {
        const copingSkills = json.user.coping_skills
        const diaryCards = json.user.diary_cards
        const emergencyContacts = json.user.emergency_contacts
        const trackers = json.user.trackers

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

        if (json.token) {
            const tokenId = `${json.token}${json.user.id}`
            
            setTimeout(() => {
                SecureStore.setItemAsync("token", tokenId)

                dispatch({
                    type: "LOGIN",
                    payload: json
                })
            }, 750)
        }
    })
  
    return (
        <View style={styles.container}>
            <ActivityIndicator color="#006DA9" />
            {/* <ImageBackground source={{uri: imgUrl}} style={{ width: 400, height: 800, borderRadius: 20 }}/> */}
        </View>
    )
}

export default connect((state)=>({state}))(Loading)