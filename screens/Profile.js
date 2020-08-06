import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Profile({ navigation }) {

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
        <Text>Profile!</Text>
        <Button
            title="Edit Profile"
            onPress={() => navigation.navigate("EditProfile")}
        />
    </View>
  )
}