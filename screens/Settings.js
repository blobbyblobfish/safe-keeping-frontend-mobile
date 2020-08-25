import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, ScrollView } from 'react-native'

import EmergencyContact from '../components/EmergencyContact'
import styles from '../StyleSheet'

function Settings({ state, navigation, dispatch }) {
  
  const renderTherapists = () => {
    return <View style={styles.container, {alignItems: 'center', padding: 20}}>
      <Text style={{ marginBottom: 10 }}>{state.therapist.name}</Text>
      <Text style={{ marginBottom: 10 }}>{state.therapist.email}</Text>

      {/* Render remove button if therapist */}
      {state.therapist.id > 0 ? <Button title="Remove" onPress={() => {
        const configObj = {
          method: "DELETE",
          body: JSON.stringify({user_id: state.auth.id})
        }

        // Currently users can only add one therapist. Update this when the feature is expanded
        fetch(`https://safe-keeping-backend.herokuapp.com/user_therapists`, configObj)
          .then(resp => resp.json())
          .then(json => {
            dispatch({type: "REMOVE_THERAPIST", payload: json})
          })
        
      }} />
      : <View style={{marginTop: 10, marginBottom: 20}}>
        <Button title="Add Therapist" onPress={() => {navigation.navigate("Add Therapist")}}/>
      </View>}
    </View>
  }

  const renderEmergencyContacts = () => {
    return state.emergency_contacts.map(emergency_contact => {
      return <EmergencyContact key={emergency_contact.id} navigation={navigation} emergencyContact={emergency_contact}/>
    })
  }
  
  return (
    <ScrollView contentContainerStyle={styles.profileScrollView}>
      <Text style={{ fontWeight: 'bold', paddingTop: 30, margin: 15 }}>Link Therapist Account</Text>
      
      {renderTherapists()}
    
      {/* <View style={{marginTop: 10, marginBottom: 20}}>
        <Button title="Add Therapist" onPress={() => {navigation.navigate("Add Therapist")}}/>
      </View> */}
      
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