import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function HelpButton( { navigation } ) {
  
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
      <Text>Welcome, let's take a deep breath.</Text>
      <Button title="Practice Coping Skills" onPress={() => { navigation.navigate("Choose A Skill") }} />
      <Button title="Call A Friend" onPress={() => { navigation.navigate("Call A Friend") }} />
      <Button title="Call A Therapist" onPress={() => { navigation.navigate("Call A Therapist") }} />
      <Button title="Call A Hotline" onPress={() => {navigation.navigate("Call A Hotline")}} />
    </View>
  )
}