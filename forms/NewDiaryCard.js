import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, Button } from 'react-native'
import styles from '../StyleSheet'
import DateTimePickerModal from "react-native-modal-datetime-picker"

function NewDiaryCard({ route, navigation, state, dispatch }) {
  
  //Controlled inputs
  const [thoughts, setThoughts] = useState('')
  const [feelings, setFeelings] = useState('')
  const [datePickerVisibility, setDatePickerVisibility] = useState(false)
  const [datePickerMode, setDatePickerMode] = useState('date')

  //Make default date the selected date from prev page
  const now = new Date()
  let datestring = route.params.datestring
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()
  const offset = now.getTimezoneOffset() / 60

  datestring = `${datestring}T${currentHour}:${currentMinute}:00.000-${offset < 10 ? 0 : null}${offset}:00`

  const parsedDate =  Date.parse(datestring)
  const defaultDateObj = new Date(parsedDate)
  
  //Get user-selected date                                
  const [selectedDateObj, setSelectedDateObj] = useState(defaultDateObj)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const selectedDateString = `${months[selectedDateObj.getMonth()]} ${selectedDateObj.getDate()} ${selectedDateObj.getFullYear()}`
  
  //Date time selection
  const hideDatePicker = () => { setDatePickerVisibility(false) }

  const selectDateTime = (dateObj) => {

    let selectedYear = dateObj.getFullYear()
    let selectedMonth = dateObj.getMonth() + 1
    let selectedDay = dateObj.getDate()
    let selectedHour = dateObj.getHours()
    let selectedMinutes = dateObj.getMinutes()

    //Check if date picker is resetting the time to 00:00
    const bool = selectedMinutes === 0

    //Use the default date object to set time
    if (selectedHour === 0) {
      if (bool) {
        selectedHour = defaultDateObj.getHours()
        selectedMinutes = defaultDateObj.getMinutes()
      }
    }

    const selectedTimeString = `${selectedYear}-${selectedMonth}-${selectedDay} ${selectedHour}:${selectedMinutes}`

    //Get date object based on timestring
    const parsedSelectedDate = Date.parse(selectedTimeString)
    const newDateObj = new Date(parsedSelectedDate)
    setSelectedDateObj(newDateObj)

    hideDatePicker()
  }
  
  //Get user-selected time
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
    13: 1, 14: 2, 15: 3, 16: 4,
    17: 5, 18: 6, 19: 7, 20: 8,
    21: 9, 22: 10, 23: 11, 0: 12
  }

  if (hour > 12 || hour === 0) {
    hour = conversions[hour]
  }

  const selectedTimeString = `${hour}:${minutes} ${period}`
  
  return (
    <View style={styles.container}>      
      {/* Render selected date and time string from object */}
      <View style={{ padding: 80, flexDirection: 'row' }}>
        <View style={{paddingRight: 50}}>
          <Button title={selectedDateString} onPress={() => {
            setDatePickerVisibility(true)
            setDatePickerMode('date')
          }} />
        </View>

        <Button title={selectedTimeString} onPress={() => {
          setDatePickerVisibility(true)
          setDatePickerMode('time')
        }} />

        <DateTimePickerModal
          isVisible={datePickerVisibility}
          headerTextIOS={""}
          date={selectedDateObj}
          mode={datePickerMode}
          onConfirm={selectDateTime}
          onCancel={hideDatePicker}
          maximumDate={new Date()}
        />
      </View>
      
      <Text style={{paddingBottom: 10}}>How are you feeling?</Text>
      <TextInput
        style={styles.multiline}
        multiline={true}
        placeholder="Right now, I am feeling..."
        onChangeText={feelings => setFeelings(feelings)}
        defaultValue={feelings}
      />

      <Text style={{paddingBottom: 10}}>What's on your mind?</Text>
      <TextInput
        style={styles.multiline}
        multiline={true}
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
            .catch(console.log)
        }}
      />
    </View>
  )
}

export default connect(state => ({state}))(NewDiaryCard)
