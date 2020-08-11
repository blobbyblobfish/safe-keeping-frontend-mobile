import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

function CallAHotline( { state, navigation } ) {
    return (
        <View>
            <Text>Call A Hotline!</Text>
        </View>
    )
}

export default connect((state)=>({state}))(CallAHotline)