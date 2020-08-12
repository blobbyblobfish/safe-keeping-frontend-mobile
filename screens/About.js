import React from 'react'
import { Text, View } from 'react-native'
import styles from '../StyleSheet'

export default function About() {
  
  return (
    <View style={styles.container}>
      <Text style={{padding: 20}}>Safe Keeping is a diary tracker and emotional first aid kit designed to help
      people learn and practice coping skills and track their daily mental health.</Text>
    </View>
  )
}