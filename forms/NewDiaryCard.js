import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

export default function NewDiaryCard() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.container}>Selected Date</Text>
      <Text style={styles.container}>Thoughts</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Right now, I am thinking..."
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Button 
        title="Submit"
      />
    </View>
  )
}
