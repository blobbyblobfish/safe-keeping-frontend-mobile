import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

function NewDiaryCard({ route, navigation, state, dispatch }) {

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
  const [thoughts, setThoughts] = useState('')
  const [feelings, setFeelings] = useState('')

  //Props from Route Params
  const fullDate = route.params.fullDate

  return (
    <View style={styles.container}>
      <Text style={styles.container}>{fullDate}</Text>
      <Text style={styles.container}>How are you feeling?</Text>
      <TextInput
        style={{height: 100, width: 500}}
        placeholder="Right now, I am feeling..."
        onChangeText={feelings => setFeelings(feelings)}
        defaultValue={feelings}
      />
      <Text style={styles.container}>What's on your mind?</Text>
      <TextInput
        style={{height: 100, width: 500}}
        placeholder="Right now, I am thinking..."
        onChangeText={thoughts => setThoughts(thoughts)}
        defaultValue={thoughts}
      />

      <Button 
        title="Next"
        onPress={() => {
          const newDiaryCard = {
            user_id: state.auth.id,
            thoughts: thoughts,
            feelings: feelings
          }

          const configObj = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accepts": "application/json"
            },
            body: JSON.stringify(newDiaryCard)
          }

          fetch(`http://localhost:3000/diary_cards`, configObj)
            .then(resp => resp.json())
            .then(json => {              
              dispatch({
                type: "ADD_DIARY_CARD",
                payload: {
                  id: json.id,
                  created_at: json.created_at,
                  thoughts: json.thoughts,
                  feelings: json.feelings,
                  diary_card_trackers: json.diary_card_trackers,
                }
              })

              navigation.navigate("New Diary Card ", { fullDate: fullDate, diaryCardId: json.id })
            })
        }}
      />
    </View>
  )
}

export default connect(state => ({state}))(NewDiaryCard)
