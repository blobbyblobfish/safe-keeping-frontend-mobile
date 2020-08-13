import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, ScrollView } from 'react-native'
import styles from '../StyleSheet'

function Profile({ state, navigation }) {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{color: 'gray', marginBottom: 10}}>Account</Text>
      <Text style={styles.p} >{state.auth.firstName}</Text>
      <Text>{state.auth.email}</Text>
      <View style={{marginTop: 20, marginBottom: 20}}>
        <Button
            title="Edit Account"
            onPress={() => navigation.navigate("Edit Account")}
        />
      </View>

      {/* <Text style={styles.h6}>Trophies</Text> */}

      {/* <Button
        title="Trends"
        onPress={() => navigation.navigate("Trends")} 
      /> */}

      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")} 
      />
    </ScrollView>
  )
}

export default connect((state) => ({state}))(Profile)