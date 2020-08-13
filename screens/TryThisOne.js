import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button } from 'react-native'
import styles from '../StyleSheet'


function TryThisOne({ route, state, navigation, dispatch }) {
    
    const copingSkill = state.coping_skills.filter(skill => skill.id === route.params.selectedSkill)[0]

    return (
        <View style={styles.container}>
            
            <Text>{copingSkill.name}</Text>
            <Text>Was That Helpful?</Text>

            {/* Record  attempts */}
            <Button title={"Yes"} onPress={() => {
                const updatedCopingSkill = {
                    attempts: copingSkill.attempts + 1,
                    successful_attempts: copingSkill.successful_attempts + 1
                }
                
                const copingSkillConfigObj = {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                        "accepts": "application/json"
                    },
                    body: JSON.stringify(updatedCopingSkill)
                }

                fetch(`http://localhost:3000/coping_skills/${copingSkill.id}`, copingSkillConfigObj)
                    .then(resp => resp.json())
                    .then(json => {
                        dispatch({
                            type: "UPDATE_COPING_SKILL",
                            payload: json
                        })

                        navigation.navigate("Coping Skills")
                    })
            }} />

            <Button title={"No"} onPress={() => {
                const updatedCopingSkill = {
                    attempts: copingSkill.attempts + 1,
                    successful_attempts: copingSkill.successful_attempts
                }
                
                const copingSkillConfigObj = {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                        "accepts": "application/json"
                    },
                    body: JSON.stringify(updatedCopingSkill)
                }

                fetch(`http://localhost:3000/coping_skills/${copingSkill.id}`, copingSkillConfigObj)
                    .then(resp => resp.json())
                    .then(json => {
                        dispatch({
                            type: "UPDATE_COPING_SKILL",
                            payload: json
                        })

                        navigation.navigate("What's Up Next?")
                    })
            }} />
        </View>
    )
}

export default connect((state)=>({state}))(TryThisOne)