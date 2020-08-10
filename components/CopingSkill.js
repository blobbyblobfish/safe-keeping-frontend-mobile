import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function CopingSkill( { skill, navigation } ) {

    return (
    <View>
        <Text>{skill.name} </Text>
        <Text>{skill.description} </Text>
        <Text>{skill.directions} </Text>
        <Button title="Edit" onPress={() => {navigation.navigate("Edit Coping Skill", {skill: skill}) }}/>    
    </View>)
}