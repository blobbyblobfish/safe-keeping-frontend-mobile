import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button, CheckBox, Switch, Platform } from 'react-native'

function NewEmergencyContact({ route, navigation, state, dispatch }) {

    const styles = StyleSheet.create({
        container: {
        // flex: 1,
        // flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        }
    })
  
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
            
        <Text style={styles.container}>Name</Text>
        <TextInput
            // style={{height: 100, width: 500}}
            placeholder="Name"
            onChangeText={name => setName(name)}
            defaultValue={name}
            />
            
        <Text style={styles.container}>Phone Number</Text>
        <TextInput
            // style={{height: 100, width: 500}}
            placeholder="Phone Number"
            keyboardType={'phone-pad'}
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
            defaultValue={phoneNumber}
        />
        
        {/* Is Therapist */}
        <Text style={styles.container}>Therapist?</Text>
        {renderToggle()}
        
        <Button 
            title="Submit"
            onPress={() => {
                
            //Create new emergency contact object in database
            const newEmergencyContact = {
                user_id: state.user.id,
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
                
            fetch(`http://localhost:3000/emergency_contacts`, configObj)
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

                    navigation.navigate("Settings")
                })       
            }}
        />
            
        </View>
    )
}

export default connect(state => ({state}))(NewEmergencyContact)
