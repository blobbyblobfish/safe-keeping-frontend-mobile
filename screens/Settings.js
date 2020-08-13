import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, ScrollView } from 'react-native'

import EmergencyContact from '../components/EmergencyContact'
import styles from '../StyleSheet'

function Settings( { state, navigation } ) {

  const renderEmergencyContacts = () => {
    return state.emergency_contacts.map(emergency_contact => {
      return <EmergencyContact key={emergency_contact.id} navigation={navigation} emergencyContact={emergency_contact}/>
    })
  }
  
  return (
    <ScrollView contentContainerStyle={styles.profileScrollView}>
      <Text style={{fontWeight: 'bold', paddingTop: 30, margin: 15}}>Emergency Contacts</Text>

      {renderEmergencyContacts()}
    
      <View style={{marginTop: 10, marginBottom: 20}}>
        <Button title="New Emergency Contact" onPress={() => {navigation.navigate("New Emergency Contact")}}/>
      </View>

      {/* Move Trackers here */}
      {/* <Text style={styles.h6}>Trackers</Text>
      <Button title="Add New Tracker" onPress={() => navigation.navigate("New Tracker")} /> */}
      
    </ScrollView>
  )
}

export default connect(state => ({state}))(Settings)