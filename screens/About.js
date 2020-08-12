import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function About() {

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
      <Text>Safe Keeping is a diary tracker and emotional first aid kit designed to help
      people learn and practice coping skills and track their daily mental health.</Text>
    </View>
  )
}