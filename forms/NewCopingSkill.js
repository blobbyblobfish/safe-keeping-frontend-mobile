import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

function NewCopingSkill( { navigation, state, dispatch } ) {
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  //Controlled inputs
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [directions, setDirections] = useState('')
  
  return (
    <View style={styles.container}>
      <Text>New Coping Skill</Text>

      <Text>Name</Text>
      <TextInput 
        onChangeText={name => setName(name)}
        defaultValue={name}
      />

      <Text>Description</Text>
      <TextInput 
        style={{height: 100, width: 500}}
        placeholder="What this skill is about."
        onChangeText={description => setDescription(description)}
        defaultValue={description}
      />

      <Text>Directions</Text>
      <TextInput
        style={{height: 100, width: 500}}
        placeholder="Step 1..."
        onChangeText={directions => setDirections(directions)}
        defaultValue={directions}
      />

      <Button title="Submit" onPress={() => {
        const newCopingSkill = {
          user_id: state.auth.id,
          name: name,
          description: description,
          directions: directions,
          attempts: 0,
          successful_attempts: 0
        }

        const configObj = {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "accepts": "application/json"
          },
          body: JSON.stringify(newCopingSkill)
        }

        fetch(`http://localhost:3000/coping_skills`, configObj)
          .then(resp => resp.json())
          .then(json => {
            dispatch({
              type: "ADD_COPING_SKILL",
              payload: json
            })
            navigation.navigate("Coping Skills")
          })
      }}/>

    </View>
  )
}

export default connect((state)=>({state}))(NewCopingSkill)