import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

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

  // **TO DO** make default the selected date from prev page
  // console.log(route.params)
  // console.log(new Date(Date.parse(route.params.datestring)))

  //selectedDate                                make default the selected date from prev page
  const [selectedDateObj, setSelectedDateObj] = useState(new Date())
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const selectedDateString = `${months[selectedDateObj.getMonth()]} ${selectedDateObj.getDate()} ${selectedDateObj.getFullYear()}`
  
  //selectedTime
  let minutes = selectedDateObj.getMinutes()
  
  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  let hour = selectedDateObj.getHours()
  let period = 'am'
  
  if (hour > 11) {
    period = 'pm'
  }

  //Military time conversion
  const conversions = {
    13: 1,
    14: 2,
    15: 3,
    16: 4,
    17: 5,
    18: 6,
    19: 7,
    20: 8,
    21: 9,
    22: 10,
    23: 11,
    0: 12
  }

  if (hour > 12 || hour === 0) {
    hour = conversions[hour]
  }

  const selectedTimeString = `${hour}:${minutes} ${period}`
    
  return (
    <View style={styles.container}>
      
      {/* Render selected date and time string from object */}
      <Text>{selectedDateString}</Text>
      <Text>{selectedTimeString}</Text>
      <Button title="Set Date" onPress={() => {navigation.navigate("Set Date Time", {mode: 'date', setSelectedDateObj: setSelectedDateObj})}} />
      <Button title="Set Time" onPress={() => {navigation.navigate("Set Date Time", {mode: 'time', setSelectedDateObj: setSelectedDateObj})}} />
      
      <Text style={styles.container}>How are you feeling?</Text>
      <TextInput
        style={{height: 100, width: 200}}
        placeholder="Right now, I am feeling..."
        onChangeText={feelings => setFeelings(feelings)}
        defaultValue={feelings}
      />
      <Text style={styles.container}>What's on your mind?</Text>
      <TextInput
        style={{height: 100, width: 200}}
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
            feelings: feelings,
            entry_timestamp: Date.parse(selectedDateObj)
          }

          console.log(newDiaryCard)

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
                  entry_timestamp: json.entry_timestamp,
                  diary_card_trackers: json.diary_card_trackers
                }
              })

              navigation.navigate("New Diary Card ", { selectedDateString: selectedDateString, selectedTimeString: selectedTimeString, diaryCardId: json.id })
            })
        }}
      />
    </View>
  )
}

export default connect(state => ({state}))(NewDiaryCard)
