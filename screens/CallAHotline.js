import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Linking } from 'react-native'

function CallAHotline( { state } ) {
    
    const resources = []

    function renderResources() {
        return resources.map(resource => <View>
            <Text>resource.name</Text>
        </View>)
    }

    return (
        <View>
            {renderResources()}
        </View>
    )
}

export default connect((state)=>({state}))(CallAHotline)