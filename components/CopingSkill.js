import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from '../StyleSheet'

export default function CopingSkill( { skill, navigation } ) {

    return (
    <View>
        <Text style={{fontWeight: 'bold', paddingBottom: 20}}>{skill.name} </Text>
        <Text style={{marginBottom: 20}}>{skill.description} </Text>
        <Text style={{marginBottom: 20}}>{skill.directions} </Text>
        {skill.attempts > 0 ? <Text style={{marginBottom: 20}}>This skill has been helpful {skill.successful_attempts} of {skill.attempts} times.</Text> : null}
        <Button title="Edit" onPress={() => {navigation.navigate("Edit Coping Skill", {skill: skill}) }}/>    
    </View>)
}