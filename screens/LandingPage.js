import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Text, View, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

import Svg, { Image } from 'react-native-svg'
import Animated, { Easing } from 'react-native-reanimated'
import { TapGestureHandler, State } from 'react-native-gesture-handler'
const { Value, block, cond, set, Clock, startClock, stopClock, debug,
    timing, clockRunning, interpolate, Extrapolate, concat } = Animated
const { width, height } = Dimensions.get('window')

function LandingPage({ navigation }) {

    //State and controlled inputs
    const [buttonOpacity, setButtonOpacity] = useState(1)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
        outputRange: [-height / 3 - 40, 0],
        extrapolate: Extrapolate.CLAMP
    })

    const textInputZIndex = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [1, -1],
        extrapolate: Extrapolate.CLAMP
    })

    const textInputY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [0, 100],
        extrapolate: Extrapolate.CLAMP
    })

    const textInputOpacity = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: Extrapolate.CLAMP
    })

    const rotateCross = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [180, 360],
        extrapolate: Extrapolate.CLAMP
    })
    
    function onStateChange ({ nativeEvent }) {
        if (nativeEvent.state === State.END) {
            setButtonOpacity(runTiming(new Clock(), 1, 0))
        }
    }

    function onCloseState({ nativeEvent }) {
        if (nativeEvent.state === State.END) {
            setButtonOpacity(runTiming(new Clock(), 0, 1))
        }
    }

    function handleLogin() {
        const credentials = {
            email: email,
            password: password
        }

        const configObj = {
            method: "POST", 
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify(credentials)
        }

        fetch(`http://localhost:3000/users/login`, configObj)
            .then(resp => resp.json())
            .then(json => {
                navigation.navigate("Loading", {json: json})
            })
            .catch(console.log)
    }
            
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end' }}>
        
            {/* Background image */}
            <Animated.View style={{...StyleSheet.absoluteFill, transform: [{ translateY: bgY }]}}>
                <Svg height={height + 100} width={width}>
                    <Image
                        href={require('../assets/bg-curve.png')}
                        height={height + 90} width={width} 
                        preserveAspectRatio='xMidYMid slice'
                        clipPath="#clip"
                    />
                </Svg>
            </Animated.View>

            {/* UI */}
            <View style={styles.buttonContainer}>
                
                <TapGestureHandler onHandlerStateChange={onStateChange}>
                    <Animated.View style={{...styles.button, opacity: buttonOpacity, transform: [{ translateY: buttonY }]}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login</Text>
                    </Animated.View>
                </TapGestureHandler>

                <TouchableOpacity onPress={() => {navigation.navigate("Create An Account")}}>
                    <Animated.View style={{...styles.button, opacity: buttonOpacity, transform: [{ translateY: buttonY }], backgroundColor: '#3D74B6'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Sign Up</Text>
                    </Animated.View>
                </TouchableOpacity>

            </View>

            <Animated.View style={{
                zIndex: textInputZIndex, opacity: textInputOpacity, transform: [{ translateY: textInputY }],
                height: height / 3, ...StyleSheet.absoluteFill, justifyContent: 'center', paddingTop: 525
            }}>
                
                <TapGestureHandler onHandlerStateChange={onCloseState}>
                    <Animated.View style={styles.closeButton}>
                        <Animated.Text style={{fontSize: 15, transform: [{rotate: concat(rotateCross, 'deg')}]}}>X</Animated.Text>
                    </Animated.View>
                </TapGestureHandler>
                
                <TextInput placeholder="email" value={email} placeholderTextColor="black" style={styles.textInput} autoCapitalize={'none'}
                     onChangeText={(email) => {
                        setEmail(email)
                        setButtonOpacity(0)
                    }}
                />
                <TextInput placeholder="password" value={password} placeholderTextColor="black" style={styles.textInput} autoCapitalize={'none'} secureTextEntry
                    onChangeText={(password) => {
                        setPassword(password)
                        setButtonOpacity(0)
                    }} 
                />
            
            </Animated.View>

            <Animated.View style={{...styles.button, zIndex: textInputZIndex, opacity: textInputOpacity, transform: [{translateY: textInputY}], }}>
                <TouchableOpacity onPress={handleLogin} >
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Submit</Text>
                </TouchableOpacity>
            </Animated.View>

        </View>
    )
}

export default connect((state)=>({state}))(LandingPage)