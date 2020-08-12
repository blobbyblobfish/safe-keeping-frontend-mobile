import React from 'react'
import { StyleSheet, Text, View, Button, Linking } from 'react-native'

export default function EmergencyContact( { navigation, emergencyContact } ) {

    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    })

    return (
        <View style={styles.container}>
        
            <Text>{emergencyContact.name}</Text>
            <Text>{emergencyContact.professional ? "Therapist" : null}</Text>

            {/* Style phone number when clickable */}
            <Text style={navigation ? null : {color: 'blue'}} onPress={() => { navigation ? Linking.openURL(`telprompt:${emergencyContact.phone_number}`) : null }}>{
                emergencyContact.phone_number}
            </Text>

            {/* Only show edit button when on settings page */}
            {navigation ? <Button title="Edit" onPress={() => {navigation.navigate("Edit Emergency Contact", {emergencyContact: emergencyContact})}} /> : null}

        </View>
        
    )
}