import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function EditAccountForm() {
  
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
      <Text>Edit Profile!</Text>
    </View>
  )
}