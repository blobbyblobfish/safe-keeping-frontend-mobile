import React, { useState } from 'react'
import { connect } from 'react-redux'
import Slider from '@react-native-community/slider'
import { Text, View, Button } from 'react-native'
import styles from '../StyleSheet'

function NewDiaryCardTrackers ( {route, navigation, state, dispatch } ) {
    
    //Controlled inputs
    const [moodScore, setMoodScore] = useState(3)
  
    //Trackers
    const moodTracker = state.trackers.find(tracker => tracker.name = "Mood")
    
    //Props from Route Params and state
    const date = route.params.selectedDateString
    const time = route.params.selectedTimeString
    const diaryCardId = route.params.diaryCardId
        
    return (
        <View style={styles.container}>
            
        <Text style={{marginBottom: 40}}>{`${date}       ${time}`}</Text>    
        <Text style={{marginBottom: 10}}>Rate your Mood</Text>
        <Text style={{marginBottom: 40}}>{moodScore}</Text>
        <Slider 
            style={{width: 350, height: 40}}
            value={moodScore}
            onValueChange={value => setMoodScore(value)}
            step={1}
            minimumValue={1}
            maximumValue={5}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            />
        <Text style={{paddingBottom: 80}}>1 - awful      2 - bad      3 - okay      4 - good      5 - great</Text>
            
        <Button 
            title="Submit"
            onPress={() => {
            const newDiaryCardTracker = {
                diary_card_id: diaryCardId,
                tracker_id: moodTracker.id,
                score: moodScore
            }
                
            const configObj = {
                method: "POST",
                headers: { "content-type": "application/json"},
                body: JSON.stringify(newDiaryCardTracker)
            }
                
            fetch("https://safe-keeping-backend.herokuapp.com/diary_card_trackers", configObj)
                .then(resp => resp.json())
                .then(json => {
                    dispatch({
                        type: "UPDATE_DIARY_CARD",
                        payload: {
                            id: json.id,
                            created_at: json.created_at,
                            thoughts: json.thoughts,
                            feelings: json.feelings,
                            diary_card_trackers: json.diary_card_trackers,
                            entry_timestamp: json.entry_timestamp
                        }
                    })
                })
                .catch(console.log)
            
            navigation.navigate("Diary Cards")
            }}
        />
        </View>
    )
}

export default connect(state => ({state}))(NewDiaryCardTrackers)
