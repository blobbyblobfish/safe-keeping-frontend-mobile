import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, ImageBackground } from 'react-native'
import styles from '../StyleSheet'

function LandingPage({ state, navigation }) {
    
    // const imgUrl = "https://img.freepik.com/free-vector/watercolour-background-with-light-blue-stains_23-2148525000.jpg?size=626&ext=jpg&ga=GA1.2.630243440.1597330785"

    function renderComponents() {     
        if (!state.auth.token) {
            return (
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 180}}>
                    <View style={{paddingBottom: 20}}>
                        <Button title="Login" onPress={() => navigation.navigate("Login")}/>
                    </View>
                    <Button title="Create an Account" onPress={() => navigation.navigate("Create An Account")}/>
                </View>
            )
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                // source={{uri: imgUrl}}
                style={{ width: 400, height: 800, borderRadius: 20 }}
            >
                {renderComponents()}
            </ImageBackground>
        </View>
    )
}

export default connect((state)=>({state}))(LandingPage)