import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import Slider from '@react-native-community/slider'

function EditDiaryCard( { navigation, route, state, dispatch } ) {
    
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#fff',
        }
    })
    
    //Props from Route Params
    const diaryCard = route.params.diaryCard
    const moodTracker = diaryCard.diary_card_trackers[0]
    
    //Controlled inputs
    const [thoughts, setThoughts] = useState(diaryCard.thoughts)
    const [feelings, setFeelings] = useState(diaryCard.feelings)
    const [moodScore, setMoodScore] = useState(0)

    useEffect(() => {
        if (!!diaryCard.diary_card_trackers[0]) {
            setMoodScore(diaryCard.diary_card_trackers[0].score)
        }
    }, [])

    function renderDiaryCardTracker() {

        if (!!diaryCard.diary_card_trackers[0]) {
            return <View>
                <Text>Mood</Text>
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
            </View>
        }
    }
    
    return <View style={styles.container}>
        <Text>Edit Diary Card!</Text>

        <Text>Feelings</Text>
        <TextInput
            onChangeText={feelings => setFeelings(feelings)}
            defaultValue={feelings}
        />

        <Text>Thoughts</Text>
        <TextInput
            onChangeText={thoughts => setThoughts(thoughts)}
            defaultValue={thoughts}
        />

        {renderDiaryCardTracker()}

        <Button title="Submit" onPress={() => {

            //Handle tracker update in Diary Card controller
            const updatedDiaryCard = {
                id: diaryCard.id,
                thoughts: thoughts,
                feelings: feelings,
                diary_card_tracker_id: moodTracker.id,
                score: moodScore
            }
            
            const diaryCardConfigObj = {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedDiaryCard)
            }

            fetch(`http://localhost:3000/diary_cards/${diaryCard.id}`, diaryCardConfigObj)
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

                        navigation.navigate("Diary Cards")
                })
            
        }} />
        
        <Button title="Delete" onPress={() => {
            fetch(`http://localhost:3000/diary_cards/${diaryCard.id}`, { method: "DELETE" })
                .then(resp => resp.json())
                .then(json => dispatch({ type: "REMOVE_DIARY_CARD", payload: json }))
                .then(navigation.navigate("Diary Cards"))
        }} />
        
    </View>
}

export default connect(state => ({state}))(EditDiaryCard)