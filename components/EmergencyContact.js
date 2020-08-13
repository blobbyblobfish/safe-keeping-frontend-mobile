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
        <View style={styles.container, {alignItems: 'center', padding: 20}}>
        
            <Text style={{ marginBottom: 10 }}>{emergencyContact.name}</Text>
            {/* Only show conditional therapist label when on settings page */}
            {navigation ? emergencyContact.professional ? <Text style={{ marginBottom: 5 }}>Therapist</Text> 
                : null
                : null} 

            {/* Style phone number when clickable */}
            <Text style={navigation ? {marginBottom: 10} : {marginBottom: 10, color: '#1384fc'}} onPress={() => { navigation ? Linking.openURL(`telprompt:${emergencyContact.phone_number}`) : null }}>{
                emergencyContact.phone_number}
            </Text>

            {/* Only show edit button when on settings page */}
            {navigation ? <Button title="Edit" onPress={() => {navigation.navigate("Edit Emergency Contact", {emergencyContact: emergencyContact})}} /> : null}

        </View>
        
    )
}