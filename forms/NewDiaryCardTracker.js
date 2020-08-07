import React, { useState } from 'react'
import { connect } from 'react-redux'
import Slider from '@react-native-community/slider'
import { StyleSheet, Text, View, Button } from 'react-native'

function NewDiaryCardTrackers ( {route, navigation, state, dispatch } ) {
    const styles = StyleSheet.create({
        container: {
        // flex: 1,
        // flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    })
    
    //Controlled inputs
    const [moodScore, setMoodScore] = useState(3)
  
    //Trackers
    const moodTracker = state.trackers.find(tracker => tracker.name = "Mood")
    
    //Props from Route Params and state
    const fullDate = route.params.fullDate
    const diaryCardId = route.params.diaryCardId
        
    return (
        <View style={styles.container}>
        <Text style={styles.container}>{fullDate}</Text>
        <Text style={styles.container}>Rate your Mood</Text>
        <Text>{moodScore}</Text>
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
        <Text>1 - awful      2 - bad      3 - okay      4 - good      5 - great</Text>
            
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
                
            fetch("http://localhost:3000/diary_card_trackers", configObj)
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
                        }
                    })
                })
            
            navigation.navigate("Diary Cards")
            }}
        />
        </View>
    )
}

export default connect(state => ({state}))(NewDiaryCardTrackers)
