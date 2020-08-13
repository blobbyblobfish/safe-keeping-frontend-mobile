import React from 'react'
import { connect } from 'react-redux'
import {  Text, View, ScrollView, Linking } from 'react-native'
import styles from '../StyleSheet'

function CallAHotline( { state } ) {
    
    const phoneNumbers = [
        {
            name: "NAMI HelpLine",
            hours: "Monday to Friday 10am-6pm Eastern",
            description: "A free, nationwide peer-support service providing information, resource referrals and support.",
            phoneNumber: "1-800-950-6264"
        },
        {
            name: "National Suicide Prevention Lifeline",
            hours: "Available 24/7",
            description: "Confidentially connects you with a local crisis center.",
            phoneNumber: "1-800-273-8255"
        }
    ]

    const textLines = [
        {
            name: "Crisis Text Line",
            hours: "Available 24/7",
            description: "Free crisis support with a trained crisis counselor.",
            directions: "Text NAMI to 741-741",
            number: "741-741",
            textBody: "NAMI"
        }
    ]

    function renderPhoneNumbers() {
        return phoneNumbers.map(resource =>
            <View key={resource.name} style={styles.container}>
                <Text style={{paddingTop: 10, paddingBottom: 5}}>{resource.name}</Text>
                <Text style={styles.p}>{resource.hours}</Text>
                <Text style={{paddingBottom: 10}}>{resource.description}</Text>
                <Text style={{ color: '#1384fc' }} onPress={() => { Linking.openURL(`telprompt:${resource.phoneNumber}`) }}>
                    {resource.phoneNumber}
                </Text>
            </View>)
    }

    function renderTextLines() {
        return textLines.map(resource => 
            <View key={resource.name} style={styles.container}>
                <Text style={{paddingTop: 10, paddingBottom: 5}}>{resource.name}</Text>
                <Text style={styles.p}>{resource.hours}</Text>
                <Text style={{paddingBottom: 10}}>{resource.description}</Text>
                <Text style={{ color: '#1384fc' }} onPress={() => { Linking.openURL(`sms:${resource.number}&body=${resource.textBody}`) }}>
                    {resource.directions}
                </Text>
            </View>)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{fontWeight: 'bold', paddingTop: 20, paddingBottom: 10}}>Phone Numbers</Text>
            {renderPhoneNumbers()}
            
            <Text style={{ color: 'white' }}>Hidden</Text>
            <Text style={{ color: 'white' }}>Hidden</Text>
            <Text style={{ color: 'white' }}>Hidden</Text>
            <Text style={{color: 'white'}}>Hidden</Text>

            <Text style={{fontWeight: 'bold', paddingTop: 20, paddingBottom: 10}}>Text Lines</Text>
            {renderTextLines()}
            
        </ScrollView>
    )
}

export default connect((state)=>({state}))(CallAHotline)