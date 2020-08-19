import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, Image, ImageBackground, StyleSheet, Alert, Dimensions } from 'react-native'
import styles from '../StyleSheet'

import { Asset } from 'expo-asset'
import Animated, { Easing } from 'react-native-reanimated'
import { TapGestureHandler, State } from 'react-native-gesture-handler'
const { Value, event, block, cond, eq, set, Clock, startClock, stopClock, debug, timing, clockRunning, interpolate, Extrapolate } = Animated
const { width, height } = Dimensions.get('window')

function LandingPage({ state, navigation }) {
    
    // const imgUrl = "https://lh3.googleusercontent.com/47TonPHhfwuJHlFIiZEyl9jfqgCdbNoO2ng9jWihBoevhaGywKntfOKOLiwcOqGLrbDDcT_Fq08lWWEoqygRrQehAk3nrqbpVyM-bSYV0rnf5kBGUT2kbB5c0zSj53tu1w6AhXE3s36cr4OGNjWhuvPGhkmSN06xXx6ejxKiM5EkoghQjtk-ByrEGGnQmLQaZzLArzEC66olmMI4IqpHzAiztlligfDfz9OmZwKl_MiHaor1zjDzZeH9NHvA2B2_oTgQ5FjLZmxafDrY1ELNfsxuRiHjPB1_X0VlNwpEmIB9AZ9NSmTIs7hh_5HzPLC20_-RuWjR8gGmV85Pl26ebz7JxtwUIMm9EUAKzkdf36T7v3NRp1Bg13DKc6X7Ys0VxS-ww-Ddo8feVxQTPJarMP8pFa_ExQHW6sN8YljipJgnZDsd4EXRn5ILiiL2bJ4pjGAhRIjxzwyISfWLOmbrQuDN8oXmojrGkjpKio4mWNkl_xtlT9GpIK5xrR1lPMgjbRI-IqaldEKd9ZKONMeoOOVWHLZacf_Cw6M9di3BAR0mJ__IQXs8B1qsYCGsUIUumN5MlnV3M9C8D-gdgEZASSkgGa-MjNs9NhLrHtrDDxaV_WO-imUJEIUGpcFN_DX1nq7knK2oKaGtZFhinj57DxZfUpg7dreLCCqNNQl9oS1QkI3OVnja-IQtNO22Kg=w403-h739-no?authuser=0"
    
    // function renderComponents() {     
        //     if (!state.auth.token) {
            //         return (
                //             <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 180}}>
                //                 <View style={{paddingBottom: 20}}>
                //                     <Button title="Login" onPress={() => navigation.navigate("Login")}/>
                //                 </View>
                //                 <Button title="Create an Account" onPress={() => navigation.navigate("Create An Account")}/>
                //             </View>
                //         )
                //     }
                // }

    // constructor() {
    //     super()

    //     console.log(State["END"])

        // this.buttonOpacity = new Value(1)
        // this.onStateChange = event([
        //     {
        //         nativeEvent: ({ state }) => block([
        //             cond(eq(state, State["END"])), set(this.buttonOpacity, 0)
        //         ])
        //     }
        // ])
    // }

    const [buttonOpacity, setButtonOpacity] = useState(1)

    function runTiming(clock, value, dest) {
        const state = {
          finished: new Value(0),
          position: new Value(0),
          time: new Value(0),
          frameTime: new Value(0)
        }
      
        const config = {
          duration: 1000,
          toValue: new Value(0),
          easing: Easing.inOut(Easing.ease)
        }
      
        return block([
          cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock)
          ]),
          timing(clock, state, config),
          cond(state.finished, debug('stop clock', stopClock(clock))),
          state.position
        ])
    }

    const buttonY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [100, 0],
        extrapolate: Extrapolate.CLAMP
    })

    const bgY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [-height / 3, 0],
        extrapolate: Extrapolate.CLAMP
    })
    
    function onStateChange ({ nativeEvent }) {
        if (nativeEvent.state === State.END) {
            setButtonOpacity(runTiming(new Clock(), 1, 0))
            console.log(buttonOpacity)
        }
    }
            
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end' }}>
            
            {/* Background image */}
            <Animated.View style={{...StyleSheet.absoluteFill, transform: [{ translateY: bgY }]}}>
                <Image source={require('../assets/bg.png')} style={{ flex: 1, width: null, height: null }} />
            </Animated.View>

            {/* UI */}
            <View style={styles.buttonContainer}>
                
                <TapGestureHandler onHandlerStateChange={onStateChange}>
                    <Animated.View style={{...styles.button, opacity: buttonOpacity, transform: [{ translateY: buttonY }]}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login</Text>
                    </Animated.View>
                </TapGestureHandler>

                <Animated.View style={{...styles.button, opacity: buttonOpacity, transform: [{ translateY: buttonY }], backgroundColor: '#3D74B6'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Sign Up</Text>
                </Animated.View>

            </View>

            {/* <ImageBackground source={{uri: imgUrl}} style={{ width: 400, height: 800, borderRadius: 20 }}>
                {renderComponents()}
            </ImageBackground> */}
        </View>
    )
}

export default connect((state)=>({state}))(LandingPage)