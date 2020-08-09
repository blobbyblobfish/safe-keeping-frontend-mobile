import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'

import EmergencyContact from '../components/EmergencyContact'

function Settings( { state, navigation } ) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })

  console.log(state)

  const renderEmergencyContacts = () => {
    return state.emergency_contacts.map(emergency_contact => {
      return <EmergencyContact key={emergency_contact.id} navigation={navigation} emergencyContact={emergency_contact}/>
    })
  }
  
  return (
    <View style={styles.container}>
      <Text>Emergency Contacts</Text>
      <Button title="New Emergency Contact" onPress={() => {navigation.navigate("New Emergency Contact")}}/>
      {renderEmergencyContacts()}
    </View>
  )
}

export default connect(state => ({state}))(Settings)