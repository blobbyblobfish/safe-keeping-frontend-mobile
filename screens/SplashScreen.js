import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button } from 'react-native'
import * as SecureStore from 'expo-secure-store'

function SplashScreen( { route, state, dispatch, navigation } ) {
    
    //Props from Route Params
    const setAuth = route.params.screenProps

    function renderComponents() {
        SecureStore.getItemAsync("token")
        .then((token) => {
            if (token) {
                dispatch({
                    type: "LOGIN",
                    payload: token
                })

                //Render Tab Navigation if token is found
                setAuth(true)
            }
        })
        
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