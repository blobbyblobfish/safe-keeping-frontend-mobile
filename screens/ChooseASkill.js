import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'

function ChooseASkill( { state, navigation } ) {
    return (
        <View>
            <Button title="Try This One" onPress={() => navigation.navigate("Try This One")} />
        </View>
    )
}

export default connect((state)=>({state}))(ChooseASkill)