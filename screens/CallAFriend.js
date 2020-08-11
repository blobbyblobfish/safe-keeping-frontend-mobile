import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

function CallAFriend( { state, navigation } ) {
    return (
        <View>
            <Text>Call A Friend!</Text>
        </View>
    )
}

export default connect((state)=>({state}))(CallAFriend)