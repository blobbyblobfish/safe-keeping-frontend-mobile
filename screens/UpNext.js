import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'

function UpNext({ state, dispatch, navigation }) {
    
    return (
        <View>
            <Text>What's Up Next?</Text>
            <Button title={"Try More Coping Skills"} onPress={() => navigation.navigate("Choose A Skill")} />
            <Button title={"Call A Friend"} onPress={() => navigation.navigate("Call A Friend")} />
            <Button title={"Call A Therapist"} onPress={() => navigation.navigate("Call A Therapist")} />
            <Button title={"Call A Hotline"} onPress={() => navigation.navigate("Call A Hotline")} />
            {/* **TO DO** Implement trophies */}
            <Button title={"I Feel Better Now"} onPress={() => navigation.navigate("Help Button")} />
        </View>
    )
}

export default connect((state)=>({state}))(UpNext)