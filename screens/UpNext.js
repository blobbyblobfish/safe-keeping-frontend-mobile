import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Button, Alert } from 'react-native'
import styles from '../StyleSheet'

function UpNext({ state, dispatch, navigation }) {
    
    return (
        <View style={styles.container}>
            <Button title={"Try More Coping Skills"} onPress={() => navigation.navigate("Choose A Skill")} />
            <Button title={"Call A Friend"} onPress={() => navigation.navigate("Call A Friend")} />
            <Button title={"Call A Therapist"} onPress={() => navigation.navigate("Call A Therapist")} />
            <Button title={"Call A Hotline"} onPress={() => navigation.navigate("Call A Hotline")} />
            
            {/* **TO DO** Implement trophies */}
            <Button title={"I Feel Better Now"} onPress={() => {
                
                // Alert.alert(
                //     "Good Work!",
                //     "You Won A Trophy!",
                //     [
                //         {
                //         text: "Awesome!",
                //         onPress: () => navigation.navigate("Profile"),
                //         style: "cancel"
                //         }
                //     ],
                //     { cancelable: false }
                // )
                    
                navigation.navigate("Help Button")
            }} />
        </View>
    )
}

export default connect((state)=>({state}))(UpNext)