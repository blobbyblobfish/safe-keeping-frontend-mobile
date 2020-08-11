import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button } from 'react-native'

function SplashScreen( { state, navigation } ) {

    function renderComponents() {     
        if (!state.auth.token) {
            return (
                <View>
                    <Button title="Login" onPress={() => navigation.navigate("Login")}/>
                    <Button title="Create an Account" onPress={() => navigation.navigate("Create An Account")}/>
                </View>
            )
        }
    }

    return (
        <View>
            {renderComponents()}
        </View>
    )
}

export default connect((state)=>({state}))(SplashScreen)