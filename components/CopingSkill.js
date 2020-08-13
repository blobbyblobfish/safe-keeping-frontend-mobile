import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from '../StyleSheet'

export default function CopingSkill( { skill, navigation } ) {

    return (
    <View>
        <Text style={styles.h6}>{skill.name} </Text>
        <Text style={styles.p}>This skill has been helpful {skill.successful_attempts} of {skill.attempts} times.</Text>
        <Text>{skill.description} </Text>
        <Text>{skill.directions} </Text>
        <Button title="Edit" onPress={() => {navigation.navigate("Edit Coping Skill", {skill: skill}) }}/>    
    </View>)
}