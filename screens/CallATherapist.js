import React from 'react'
import { connect } from 'react-redux'
import { View, Button } from 'react-native'

import EmergencyContact from '../components/EmergencyContact'
import styles from '../StyleSheet'

function CallATherapist({ navigation, state }) {
    
    function renderContacts() {
        const filteredContacts = state.emergency_contacts.filter(ec => ec.professional)
        return filteredContacts.map(ec => <EmergencyContact key={ec.id} emergencyContact={ec} />)
    }

    return (
        <View style={styles.container}>
            {renderContacts()}
            <Button title="Add A Contact" onPress={() => {navigation.navigate("New Emergency Contact")}} />
        </View>
    )
}

export default connect((state)=>({state}))(CallATherapist)