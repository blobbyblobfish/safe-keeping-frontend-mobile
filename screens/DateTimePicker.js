import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateTime( { navigation, route } ) {

    //Props from Route Params
    const mode = route.params.mode
    const setSelectedDateObj = route.params.setSelectedDateObj
    const date = new Date()

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setSelectedDateObj(currentDate)
    }
    
    return <DateTimePicker
        value={date}
        mode={mode}
        onChange={onChange}
        is24Hour={true}
        display="default"
  />
}