import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Calendar } from 'react-native-calendars'

function DiaryCards( props ) {

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

  console.log(props)

  return (  
    <View style={styles.container}>
      
      {/* Calendar feature marks dates of UserDiaryCards*/}
      <Calendar
        // style={styles.calendar}
        hideExtraDays={true}
        onDayPress={(day) => { console.log(day) }}

        // Max Date allows the day after today to be selected?
        maxDate={Date()}
        markedDates={{
          '2020-08-02': { marked: true }
        }}
      />

      <Button
            title="New Diary Card"
            onPress={() => props.navigation.navigate("New Diary Card")}
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

export default connect(state => ({state}))(DiaryCards)