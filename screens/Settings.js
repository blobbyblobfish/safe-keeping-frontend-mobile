import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button } from 'react-native'

import EmergencyContact from '../components/EmergencyContact'
import styles from '../StyleSheet'

function Settings( { state, navigation } ) {

  const renderEmergencyContacts = () => {
    return state.emergency_contacts.map(emergency_contact => {
      return <EmergencyContact key={emergency_contact.id} navigation={navigation} emergencyContact={emergency_contact}/>
    })
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.h6}>Emergency Contacts</Text>
      {renderEmergencyContacts()}
      <Button title="New Emergency Contact" onPress={() => {navigation.navigate("New Emergency Contact")}}/>
    
      {/* Move Trackers here */}
      {/* <Text style={styles.h6}>Trackers</Text>
      <Button title="Add New Tracker" onPress={() => navigation.navigate("New Tracker")} /> */}
      
    </View>
  )
}

export default connect(state => ({state}))(Settings)