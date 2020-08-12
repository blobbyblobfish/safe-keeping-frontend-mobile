import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button, CheckBox, Switch, Platform } from 'react-native'

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

    return (
        <View>
            <Text>Edit Emergency Contact</Text>

            <Text>Name</Text>
            <TextInput value={newName} onChangeText={value => setNewName(value)} />
            
            <Text>Phone Number</Text>
            <TextInput value={newPhoneNumber} onChangeText={value => setNewPhoneNumber(value)} keyboardType={'phone-pad'} />

            <Text>Therapist?</Text>
            {renderToggle()}

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

                fetch(`http://localhost:3000/emergency_contacts/${id}`, configObj)
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

            }} />

            <Button title="Delete" onPress={() => {
                fetch(`http://localhost:3000/emergency_contacts/${id}`, { method: "DELETE" })
                    .then(resp => resp.json())
                    .then(json => {
                        dispatch({ type: "REMOVE_EMERGENCY_CONTACT", payload: { id: json.id } })

                        navigation.navigate("Settings")
                    })
                
            }} />
        </View>
    )
}

export default connect((state) => ({state}))(EditEmergencyContact)