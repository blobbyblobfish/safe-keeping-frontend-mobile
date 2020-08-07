import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

export default function NewDiaryCardTrackers ( {route, navigation} ) {

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  
  //Controlled inputs
  const [rating, setRating] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.container}>{route.params.fullDate}</Text>
      <Text style={styles.container}>Rate your mood</Text>
      <Button 
        title="Submit"
        onPress={() => {
        console.log("submitted")
        navigation.navigate("Diary Cards")
        }}
      />
    </View>
  )
}
