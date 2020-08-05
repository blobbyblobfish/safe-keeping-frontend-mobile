import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Calendar } from 'react-native-calendars'

export default function DiaryCards({ navigation }) {

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
  
  const renderSelectedDay = (dayObject) => {
    const selectedDay = dayObject.dateString
    return selectedDay
  }

  return (
    <View style={styles.container}>
      
      {/* Calendar feature marks dates of UserDiaryCards*/}
      <Calendar
        // style={styles.calendar}
        onDayPress={(day) => { console.log(day) }}

        // Max Date allows the day after today to be selected?
        maxDate={Date()}
        markedDates={{
          '2020-08-02': { marked: true }
        }}
      />

      <Button
            title="New Diary Card"
            accessibilityLabel="New Diary Card"
            onPress={() => navigation.navigate("New Diary Card")}
      />

      {/* <Text>{renderSelectedDay()}</Text> */}

      {/* <View style={styles.diaryCards}> */}
        <Text>Selected Day</Text>
        <Text>Dynamically Render Diary Cards</Text>
        <Text>Dynamically Render Diary Cards</Text>
        <Text>Dynamically Render Diary Cards</Text>
      {/* </View> */}

    </View>
  )
}