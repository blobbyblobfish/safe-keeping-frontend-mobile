import React from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import styles from '../StyleSheet'

export default function DiaryCard({ diaryCard, navigation }) {
        
    //Date conversion
    const dateObj = new Date(diaryCard.entry_timestamp)
    
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
        localHour = localHour.slice(1, 2)
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
            <Text key={tracker.id}>{tracker.tracker.name}: {tracker.score}</Text>
        )
        }
    }

    //Diary Cards
    return (
        <View key={diaryCard.id}>
            
            <View style={styles.p} >
                <Text>{`${localHour}:${minute} ${period}`}                                                           {renderDiaryCardTrackers()}</Text>
            </View>

            <View style={styles.p} >
                {diaryCard.feelings === '' ? null : <Text>{diaryCard.feelings}</Text>}
            </View>
            
            <View>
                {diaryCard.thoughts === '' ? null : <Text>{diaryCard.thoughts}</Text>}
            </View>
            
            <View style={{ alignItems: 'flex-end', paddingBottom: 40 }} >
                <Button title="Edit" onPress={() => navigation.navigate("Edit Diary Card", { diaryCard: diaryCard })} />
            </View>
        </View>
    )

}