import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, Button, Alert } from 'react-native'
import styles from '../StyleSheet'

function EditCopingSkill( { navigation, route, dispatch } ) {
    
    //Props from Route Params
    const copingSkill = route.params.skill
    
    //Controlled inputs
    const [name, setName] = useState(copingSkill.name)
    const [description, setDescription] = useState(copingSkill.description)
    const [directions, setDirections] = useState(copingSkill.directions)

    //Confirm alert
    function confirmAlert() {
        Alert.alert(
            "Are you sure?",
            "This action cannot be undone", 
            [
                {
                    text: "Cancel",
                    style: "cancel",
                    onPress: () => { }
                },
                {
                    text: "Delete",
                    onPress: () => {
                        fetch(`https://safe-keeping-backend.herokuapp.com/coping_skills/${copingSkill.id}`, { method: "DELETE" })
                            .then(resp => resp.json())
                            .then(json => dispatch({ type: "REMOVE_COPING_SKILL", payload: json }))
                            .then(navigation.navigate("Coping Skills"))
                            .catch(console.log) 
                    }
                }
            ]
        )
    }
    
    return <View style={styles.container} >
        <Text style={{paddingBottom: 10, color: 'gray'}} >Name</Text>
        <TextInput style={{marginBottom: 30}} defaultValue={name} onChangeText={name => setName(name)} />
        
        <Text style={{paddingBottom: 10, color: 'gray'}} >Description</Text>
        <TextInput style={styles.multiline} multiline defaultValue={description} onChangeText={description => setDescription(description)}/>

        <Text style={{paddingBottom: 10, color: 'gray'}} >Directions</Text>
        <TextInput style={styles.multiline} multiline defaultValue={directions} onChangeText={directions => setDirections(directions)}/>

        <Button title="Submit" onPress={() => {
            const updatedCopingSkill = {
                name: name,
                description: description,
                directions: directions
            }
            
            const copingSkillConfigObj = {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "accepts": "application/json"
                },
                body: JSON.stringify(updatedCopingSkill)
            }

            fetch(`https://safe-keeping-backend.herokuapp.com/coping_skills/${copingSkill.id}`, copingSkillConfigObj)
                .then(resp => resp.json())
                .then(json => {
                    dispatch({
                        type: "UPDATE_COPING_SKILL",
                        payload: json
                    })

                    navigation.navigate("Coping Skills")
                })
                .catch(console.log) 
            
        }} />
        
        <View style={{paddingTop: 80}}>
        <Button title="Delete" onPress={confirmAlert} />
        </View>
        
    </View>
}

export default connect(state => ({state}))(EditCopingSkill)