import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, Button, CheckBox, Switch, Platform } from 'react-native'
import styles from '../StyleSheet'

function NewEmergencyContact({ navigation, state, dispatch }) {

    //Controlled inputs
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [therapist, setTherapist] = useState(false)

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
        <View style={styles.container}>
            
        <Text>Name</Text>
        <TextInput
            style={{height: 40, width: 200, marginBottom: 20}}
            placeholder="Name"
            onChangeText={name => setName(name)}
            defaultValue={name}
            />
            
        <Text>Phone Number</Text>
        <TextInput
            style={{height: 40, width: 200, marginBottom: 20}}
            placeholder="1-234-567-8900"
            keyboardType={'phone-pad'}
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
            defaultValue={phoneNumber}
        />
        
        {/* Is Therapist */}
        <Text style={styles.p}>Therapist?</Text>
        <View style={{marginBottom: 40}}>{renderToggle()}</View>
        
        <Button 
            title="Submit"
            onPress={() => {
                
            //Create new emergency contact object in database
            const newEmergencyContact = {
                user_id: state.auth.id,
                name: name,
                phone_number: phoneNumber,
                professional: therapist
            }
                
            //Fetch
            const configObj = {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "accepts": "application/json"
                },
                body: JSON.stringify(newEmergencyContact)
            }
                
            fetch(`https://safe-keeping-backend.herokuapp.com/emergency_contacts`, configObj)
                .then(resp => resp.json())
                .then(json => {
                    //Update state

                    dispatch({
                        type: "ADD_EMERGENCY_CONTACT",
                        payload: {
                            id: json.id,
                            name: json.name,
                            phone_number: json.phone_number,
                            professional: json.professional
                        }
                    })

                    navigation.goBack()
                })
                .catch(console.log)
            }}
        />
            
        </View>
    )
}

export default connect(state => ({state}))(NewEmergencyContact)
