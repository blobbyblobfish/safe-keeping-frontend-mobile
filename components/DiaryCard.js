import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function DiaryCard({ diaryCard, fullDate, navigation }) {
    
    //Time conversion
    const utcTime = diaryCard.created_at.slice(11, 16)
    const timezone = "Eastern"

    let hour = utcTime.slice(0, 2) - 4
    const minute = utcTime.slice(3)
    const period = hour > 11 ? "pm" : "am"
    
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

    if (hour > 12) {
        hour = conversions[hour]
    }

    console.log(`${timezone}: ${hour}:${minute} ${period}`)
        
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
            <Text>{fullDate}</Text>
            <Text>{`${hour}:${minute} ${period}`}</Text>
            <Text>{diaryCard.feelings}</Text>
            <Text>{diaryCard.thoughts}</Text>
            {renderDiaryCardTrackers()}
            <Button title="Edit" onPress={() => navigation.navigate("Edit Diary Card", {diaryCard: diaryCard})}/>
        </View>
    )

}