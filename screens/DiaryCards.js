import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function DiaryCards() {
  return (
    <View style={styles.container}>
      <Text>Diary Cards!</Text>
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