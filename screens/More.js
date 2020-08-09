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
            onPress={() => navigation.navigate("About")} 
          />
          <Button
            title="Trends"
            onPress={() => navigation.navigate("Trends")} 
          />
          <Button
            title="Settings"
            onPress={() => navigation.navigate("Settings")} 
          />
          <Button
            title="Logout"
            onPress={() => {console.log("logout")}}
        />
    </View>
  )
}