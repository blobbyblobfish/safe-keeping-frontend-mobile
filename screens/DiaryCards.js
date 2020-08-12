import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Calendar } from 'react-native-calendars'
import DiaryCard from '../components/DiaryCard'

function DiaryCards( { navigation, state, } ) {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    }
  })

  //***DATE SELECTION***
  //Set default selected date to today
  const today = new Date()
  const [date, setDate] = useState({ year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() })
  
  //Convert selected date to full date and date-string 
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const fullDate = `${months[date.month - 1]} ${date.day} ${date.year}`
  let datestring = `${date.year}-${date.month}-${date.day}`

  //Convert datestring month to double digits
  if (date.month < 10) {
    datestring = `${date.year}-0${date.month}-${date.day}`
  }
  
  //Convert datestring day to double digits
  if (date.day < 10) {
    datestring = `${date.year}-0${date.month}-0${date.day}`
  }
  
  //***UTC CONVERSION***

  function returnDatestring(timestamp) {
    const convertedDate = new Date(timestamp)

    let convertedDay = convertedDate.getDate()
    let convertedMonth = convertedDate.getMonth() + 1

    if (convertedMonth < 10) {
      convertedMonth = `0${convertedMonth}`
    }

    if (convertedDay < 10) {
      convertedDay = `0${convertedDay}`
    }

    return `${convertedDate.getFullYear()}-${convertedMonth}-${convertedDay}`
  }

  //for Diary Cards
  const renderDiaryCards = () => {
  
    //Filter by selected date
    const filteredDiaryCards = state.diary_cards.filter(diary_card => {
      return returnDatestring(diary_card.entry_timestamp) === datestring
    })
    
    //Render Diary Cards
    return filteredDiaryCards.map(diary_card =>
      <DiaryCard key={diary_card.id} diaryCard={diary_card} navigation={navigation} />
    )
  }

  //Mark dates on calendar
  function markedDates() {
    let markedDates = {}

    //Selected day
    markedDates[datestring] = { selected: true }

    //Dates with diary cards
    const diaryCardDates = state.diary_cards.map(diaryCard => {
      return returnDatestring(diaryCard.entry_timestamp)
    })
    
    diaryCardDates.forEach(date => {
      markedDates[date] = { marked: true }
      
      if (date === datestring) {
        return markedDates[date] = { marked: true, selected: true }
      }
    })

    return markedDates
  }

  return (  
    <View style={styles.container}>
      
      <Calendar
        hideExtraDays={true}
        onDayPress={(day) => { setDate(day) }}
        maxDate={today}
        markedDates={markedDates()}
      />

      {<Button title="New Diary Card"
        onPress={() => navigation.navigate("New Diary Card", {datestring: datestring})}
      />}

      <Text style={{ fontWeight: 'bold' }}> {fullDate}</Text>
      {renderDiaryCards()}

    </View>
  )
}

export default connect(state => ({state}))(DiaryCards)