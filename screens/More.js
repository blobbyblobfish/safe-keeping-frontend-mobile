import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

export default function More({ navigation }) {
  
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
          <Button
            title="About"
            accessibilityLabel="About"
            onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
          />
          <Button
            title="Trends"
            accessibilityLabel="Trends"
            onPress={() => navigation.navigate("Trends")} // We added an onPress event which would navigate to the About screen
          />
          <Button
            title="Settings"
            accessibilityLabel="Settings"
            onPress={() => navigation.navigate("Settings")} // We added an onPress event which would navigate to the About screen
          />
          <Button
            title="Logout"
        />
    </View>
  )
}