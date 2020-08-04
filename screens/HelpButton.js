import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HelpButton() {
  return (
    <View style={styles.container}>
      <Text>Help Button!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})