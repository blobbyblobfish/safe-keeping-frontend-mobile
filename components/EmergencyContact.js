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
        
            <Text>{emergencyContact.name}</Text>
                {navigation ? <Text>{emergencyContact.professional ? "Therapist" : null}</Text>
                : <Text style={{ color: 'white' }}>Hidden</Text>} 

            {/* Style phone number when clickable */}
            <Text style={navigation ? null : {color: '#1384fc'}} onPress={() => { navigation ? Linking.openURL(`telprompt:${emergencyContact.phone_number}`) : null }}>{
                emergencyContact.phone_number}
            </Text>

            {/* Only show edit button when on settings page */}
            {navigation ? <Button title="Edit" onPress={() => {navigation.navigate("Edit Emergency Contact", {emergencyContact: emergencyContact})}} /> : null}

        </View>
        
    )
}