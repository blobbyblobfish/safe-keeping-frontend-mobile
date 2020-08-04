import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>Profile!</Text>
        <Button
            title="Edit Profile"
            color="#841584"
            accessibilityLabel="Edit Profile"
            onPress={() => navigation.navigate("EditProfile")}
        />
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