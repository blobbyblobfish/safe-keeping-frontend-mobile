import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function DiaryCard( { diaryCard, navigation } ) {
        
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
            <Text>{diaryCard.created_at}</Text>
            <Text>{diaryCard.feelings}</Text>
            <Text>{diaryCard.thoughts}</Text>
            {renderDiaryCardTrackers()}
            <Button title="Edit" onPress={() => navigation.navigate("Edit Diary Card", {diaryCard: diaryCard})}/>
        </View>
    )

}