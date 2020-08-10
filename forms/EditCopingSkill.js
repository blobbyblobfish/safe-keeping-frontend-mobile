import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import Slider from '@react-native-community/slider'

function EditCopingSkill( { navigation, route, dispatch } ) {
    
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#fff',
        }
    })
    
    //Props from Route Params
    const copingSkill = route.params.skill
    
    //Controlled inputs
    const [name, setName] = useState(copingSkill.name)
    const [description, setDescription] = useState()
    const [directions, setDirections] = useState()
    
    return <View style={styles.container}>
        <Text>Edit Coping Skill</Text>

        <Text>Name</Text>
        <TextInput defaultValue={name} onChangeText={name => setName(name)} />
        
        <Text>Description</Text>
        <TextInput defaultValue={description} onChangeText={description => setDescription(description)}/>

        <Text>Directions</Text>
        <TextInput defaultValue={directions} onChangeText={directions => setDirections(directions)}/>

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
        
        <Button title="Delete" onPress={() => {
            fetch(`http://localhost:3000/coping_skills/${copingSkill.id}`, { method: "DELETE" })
                .then(resp => resp.json())
                .then(json => dispatch({ type: "REMOVE_COPING_SKILL", payload: json }))
                .then(navigation.navigate("Coping Skills"))
        }} />
        
    </View>
}

export default connect(state => ({state}))(EditCopingSkill)