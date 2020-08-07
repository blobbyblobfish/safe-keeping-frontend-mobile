import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Calendar } from 'react-native-calendars'

function DiaryCards( { navigation, state } ) {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    button: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: 'red'
    },
    diaryCards: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }
  })

  const today = new Date()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const [date, setDate] = useState({year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate()})
  const fullDate = `${months[date.month - 1]} ${date.day} ${date.year}`
  let datestring = `${date.year}-${date.month}-${date.day}`

  //Convert selected date to datestring for calendar marking
  if (date.month < 10) {
    datestring = `${date.year}-0${date.month}-${date.day}`
  }

  if (date.day < 10) {
    datestring = `${date.year}-0${date.month}-0${date.day}`
  }
  
  //Tracker components ** TO DO ** (move to separate file)
  const renderDiaryCardTrackers = (diary_card) => {
    if (diary_card.diary_card_trackers) {
      return diary_card.diary_card_trackers.map(tracker =>
        <View key={tracker.tracker.name}>
          <Text>{tracker.tracker.name}</Text>
          <Text>{tracker.score}</Text>
        </View>)
    }
  }

  const renderDiaryCards = () => {

    //** TO DO ** Filter by selected date

    return state.diary_cards.map(diary_card => 
      <View key={diary_card.id}>
        <Text>{diary_card.created_at}</Text>
        <Text>{diary_card.feelings}</Text>
        {renderDiaryCardTrackers(diary_card)}
        <Button title="Edit"/>
      </View>
    )
  }

  return (  
    <View style={styles.container}>
      
      <Calendar
        hideExtraDays={true}
        onDayPress={(day) => { setDate(day) }}
        maxDate={today}

        // Dynamically mark dates of diary entries and highlight selected day
        markedDates={{
          '2020-08-02': { marked: true },
          '2020-08-04': { marked: true }
        }}
      />

      <Button
        title="New Diary Card"
        onPress={() => navigation.navigate("New Diary Card", {fullDate: fullDate})}
      />

      <Text style={{ fontWeight: 'bold' }}> {fullDate}</Text>
      {renderDiaryCards()}

    </View>
  )
}

export default connect(state => ({state}))(DiaryCards)