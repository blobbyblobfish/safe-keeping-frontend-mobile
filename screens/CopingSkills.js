import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function CopingSkills( { navigation } ) {

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
      <Text>Coping Skills!</Text>
      <Button 
        title="New Coping Skill"
        onPress={() => navigation.navigate("New Coping Skill")}
      />
    </View>
  )
}

