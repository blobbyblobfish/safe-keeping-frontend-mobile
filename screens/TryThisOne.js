import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'

function TryThisOne( { state, navigation } ) {

    return (
        <View>
            <Text>Try This One</Text>
            <Text>Was That Helpful?</Text>
            <Button title={"Yes"} onPress={() => navigation.navigate("What's Up Next?")} />
            <Button title={"No"} onPress={() => navigation.navigate("What's Up Next?")} />
        </View>
    )
}

export default connect((state)=>({state}))(TryThisOne)