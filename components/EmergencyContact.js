import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

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
            <Text>{emergencyContact.phone_number}</Text>
            <Text>{emergencyContact.professional ? "Therapist" : null}</Text>
        
            <Button title="Edit" onPress={() => {navigation.navigate("Edit Emergency Contact", {emergencyContact: emergencyContact})}} />
            
        </View>
    )
}