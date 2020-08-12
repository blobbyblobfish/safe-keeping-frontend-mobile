import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function DiaryCard({ diaryCard, navigation }) {
    console.log(diaryCard)    
    //Date conversion
    const dateObj = new Date(diaryCard.entry_timestamp)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = months[dateObj.getMonth()]
    let day = dateObj.getDate()
    const year = dateObj.getFullYear()
    
    //Time conversion
    const minute = dateObj.getMinutes()
    const utcHour = dateObj.getHours()
    const offset = dateObj.getTimezoneOffset() / 60
    
    //Convert UTC to local time
    dateObj.setHours(utcHour - offset)

    //Get converted strings
    const newDateString = dateObj.toISOString().replace('T', ' ').slice(0, 16)

    let localHour = newDateString.slice(11, 13)
    
    //Remove prepending zeroes
    if (parseInt(localHour.split('')) === 0) {
        localHour = localHour.slice(0, 1)
    }

    const period = parseInt(localHour) > 11 ? "pm" : "am"
    
    //Military time conversion
    const conversions = {
        13: 1, 14: 2, 15: 3,
        16: 4, 17: 5, 18: 6,
        19: 7, 20: 8, 21: 9,
        22: 10, 23: 11, 0: 12
    }

    if (parseInt(localHour) > 12 || parseInt(localHour) === 0 ) {
        localHour = conversions[localHour]
    }
        
    //Diary Card Trackers
    const renderDiaryCardTrackers = () => {
        if (diaryCard.diary_card_trackers) {
        return diaryCard.diary_card_trackers.map(tracker =>
            <View key={tracker}>
                <Text>{tracker.tracker.name}</Text>
                <Text>{tracker.score}</Text>
            </View>)
        }
    }

    //Diary Cards
    return (
        <View key={diaryCard.id}>
            <Text>{month} {day} {year}</Text>
            <Text>{`${localHour}:${minute} ${period}`}</Text>
            <Text>{diaryCard.feelings}</Text>
            <Text>{diaryCard.thoughts}</Text>
            {renderDiaryCardTrackers()}
            <Button title="Edit" onPress={() => navigation.navigate("Edit Diary Card", {diaryCard: diaryCard})}/>
        </View>
    )

}