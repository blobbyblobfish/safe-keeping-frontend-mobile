import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'

function Profile({ state, dispatch, navigation }) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  
  return (
    <View style={styles.container}>
      <Text>{state.auth.firstName}</Text>
      <Text>{state.auth.email}</Text>
        <Button
            title="Edit Account"
            onPress={() => navigation.navigate("Edit Account")}
      />
      <Text>Trophies</Text>
                <Button
            title="Trends"
            onPress={() => navigation.navigate("Trends")} 
          />
          <Button
            title="Settings"
            onPress={() => navigation.navigate("Settings")} 
          />
    </View>
  )
}

export default connect((state) => ({state}))(Profile)