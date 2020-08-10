import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function DiaryCard({ diaryCard, navigation }) {
    
    //Date conversion
    const datestring = diaryCard.created_at.slice(0, 10)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = months[parseInt(datestring.slice(5, 7)) - 1]
    let day = datestring.slice(9, 11)
    const year = datestring.slice(0, 4)
    
    //Time conversion
    const utcTime = diaryCard.created_at.slice(11, 16)
    const timezone = "Eastern"
    const offset = 4

    let utcHour = utcTime.slice(0, 2)
    let localHour = utcHour - offset
    const minute = utcTime.slice(3)
    const period = localHour > 11 ? "pm" : "am"

    //Deal with time zone offset
    // console.log(month, day, hour, period)

    if (localHour < offset && period === 'am') {
        day = day - 1
        localHour = 24 - utcHour
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

    if (localHour > 12) {
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