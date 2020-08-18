import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, Button, Alert } from 'react-native'
import Slider from '@react-native-community/slider'
import styles from '../StyleSheet'

function EditDiaryCard( { navigation, route, dispatch } ) {
    
    //Props from Route Params
    const diaryCard = route.params.diaryCard
    const moodTracker = diaryCard.diary_card_trackers[0]
    
    //Controlled inputs
    const [thoughts, setThoughts] = useState(diaryCard.thoughts)
    const [feelings, setFeelings] = useState(diaryCard.feelings)
    const [moodScore, setMoodScore] = useState(0)

    useEffect(() => {
        if (!!moodTracker) {
            setMoodScore(moodTracker.score)
        }
    }, [])

    //Confirm alert (handles delete on confirm)
    function confirmAlert() {
        Alert.alert(
            "Are you sure?",
            "This action cannot be undone.",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                    onPress: () => { }
                },
                {
                    text: "Delete",
                    onPress: () => {
                        fetch(`https://safe-keeping-backend.herokuapp.com/diary_cards/${diaryCard.id}`, { method: "DELETE" })
                            .then(resp => resp.json())
                            .then(json => dispatch({ type: "REMOVE_DIARY_CARD", payload: json }))
                            .then(navigation.navigate("Diary Cards"))
                            .catch(console.log)
                    }
                }
            ]
          )
    }

    //Includes tracker
    function renderDiaryCardTracker() {
        if (!!moodTracker) {
            return <View style={styles.container}>
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
                <Text style={{marginBottom: 75}}>1 - awful      2 - bad      3 - okay      4 - good      5 - great</Text>
            </View>
        }
    }
    
    return <View style={styles.container}>
        <Text style={{paddingTop: 40, paddingBottom: 10, color: 'gray'}}>Feelings</Text>
        <TextInput
            multiline onChangeText={feelings => setFeelings(feelings)}
            defaultValue={feelings} style={{height: 80, width: 300}}
        />

        <Text style={{color: 'gray', paddingBottom: 10}} >Thoughts</Text>
        <TextInput
            multiline onChangeText={thoughts => setThoughts(thoughts)}
            defaultValue={thoughts} style={{height: 80, width: 300}}
        />

        {renderDiaryCardTracker()}

        <Button title="Submit" onPress={() => {

            let updatedDiaryCard = {
                id: diaryCard.id,
                thoughts: thoughts,
                feelings: feelings,
                score: moodScore
            }

            //Handles tracker update in Diary Card controller
            if (moodTracker) {
                updatedDiaryCard = {
                    ...updatedDiaryCard,
                    diary_card_tracker_id: moodTracker.id,
                    score: moodScore
                }
            }
            
            const diaryCardConfigObj = {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedDiaryCard)
            }

            fetch(`https://safe-keeping-backend.herokuapp.com/diary_cards/${diaryCard.id}`, diaryCardConfigObj)
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
                    .catch(console.log)

        }} />
        
        <View style={{paddingTop: 30, paddingBottom: 30}}>
            <Button title="Delete" onPress={confirmAlert} />
        </View>
        
    </View>
}

export default connect(state => ({state}))(EditDiaryCard)