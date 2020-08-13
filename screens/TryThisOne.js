import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button } from 'react-native'
import CopingSkill from '../components/CopingSkill'
import styles from '../StyleSheet'

function TryThisOne({ route, state, navigation }) {
    
    const copingSkill = state.coping_skills.filter(skill => skill.id === route.params.selectedSkill)[0]

    return (
        <View style={styles.container}>
            
            <Text>{copingSkill.name}</Text>
            <Text>Was That Helpful?</Text>

            {/* **TO DO** Record helpful attempts */}
            <Button title={"Yes"} onPress={() => navigation.navigate("What's Up Next?")} />
            <Button title={"No"} onPress={() => navigation.navigate("What's Up Next?")} />
        </View>
    )
}

export default connect((state)=>({state}))(TryThisOne)