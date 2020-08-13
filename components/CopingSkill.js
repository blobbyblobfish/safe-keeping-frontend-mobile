import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from '../StyleSheet'

export default function CopingSkill( { skill, navigation } ) {

    return (
    <View>
        <Text style={styles.h6}>{skill.name} </Text>
        {skill.attempts > 0 ? <Text style={styles.p}>This skill has been helpful {skill.successful_attempts} of {skill.attempts} times.</Text> : null}
        <Text style={{paddingBottom: 8}}>{skill.description} </Text>
        <Text style={styles.p}>{skill.directions} </Text>
        <Button title="Edit" onPress={() => {navigation.navigate("Edit Coping Skill", {skill: skill}) }}/>    
    </View>)
}