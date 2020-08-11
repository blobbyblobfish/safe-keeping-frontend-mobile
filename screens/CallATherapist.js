import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

function CallATherapist( { state, navigation } ) {
    return (
        <View>
            <Text>Call A Therapist!</Text>
        </View>
    )
}

export default connect((state)=>({state}))(CallATherapist)