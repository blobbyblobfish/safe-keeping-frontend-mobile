import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, Button, CheckBox, Switch, Platform, Alert } from 'react-native'
import styles from '../StyleSheet'

function EditEmergencyContact({ route, state, dispatch, navigation }) {
    
    //Props from Route Params
    const { id, name, phone_number, professional } = route.params.emergencyContact

    //Controlled inputs
    const [newName, setNewName] = useState(name)
    const [newPhoneNumber, setNewPhoneNumber] = useState(phone_number)
    const [therapist, setTherapist] = useState(professional)

    //Boolean components
    const toggleTherapist = () => {
        setTherapist(!therapist)
    }

    const renderToggle = () => {
        if (Platform.OS === 'ios') {
            return <Switch onValueChange={toggleTherapist} value={therapist} />
        }

        else {
            return <CheckBox label="Yes" value={therapist} onChange={toggleTherapist} />
        }
    }

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
                        fetch(`https://safe-keeping-backend.herokuapp.com/emergency_contacts/${id}`, { method: "DELETE" })
                            .then(resp => resp.json())
                            .then(json => {
                                dispatch({ type: "REMOVE_EMERGENCY_CONTACT", payload: { id: json.id } })
        
                                navigation.navigate("Settings")
                            })
                            .catch(console.log)
                        
                    }
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{paddingBottom: 10, color: 'gray'}} >Name</Text>
            <TextInput style={{marginBottom: 20}} value={newName} onChangeText={value => setNewName(value)} />
            
            <Text style={{paddingBottom: 10, color: 'gray'}} >Phone Number</Text>
            <TextInput style={{marginBottom: 30}} value={newPhoneNumber} onChangeText={value => setNewPhoneNumber(value)} keyboardType={'phone-pad'} />

            <Text style={{paddingBottom: 10, color: 'gray'}} >Therapist?</Text>
            <View style={{marginBottom: 40}}>{renderToggle()}</View>

            <Button title="Submit" onPress={() => {
                const updatedEmergencyContact = {
                    id: id,
                    user_id: state.auth.id,
                    name: newName,
                    phone_number: newPhoneNumber,
                    professional: therapist
                }

                const configObj = {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                        "accepts": "application/json"
                    },
                    body: JSON.stringify(updatedEmergencyContact)
                }

                fetch(`https://safe-keeping-backend.herokuapp.com/emergency_contacts/${id}`, configObj)
                    .then(resp => resp.json())
                    .then(json => {
                        dispatch({
                            type: "UPDATE_EMERGENCY_CONTACT",
                            payload: {
                                id: json.id,
                                user_id: json.user_id,
                                name: json.name,
                                phone_number: json.phone_number,
                                professional: json.professional
                            }
                        })

                        navigation.navigate("Settings")
                    })
                    .catch(console.log)

            }} />

            <View style={{paddingTop: 50}}>
            <Button title="Delete" onPress={confirmAlert} />
            </View>
        </View>
    )
}

export default connect((state) => ({state}))(EditEmergencyContact)