import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

function ChooseASkill({ state, navigation }) {

    const [selectedSkill, setSelectedSkill] = useState(0)
    const imgKey = "waves"
    const imgGallery = {
        waves: "https://images.unsplash.com/photo-1581701545134-c627459217a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    }
    
    function renderCarousel() {
        return (
            state.coping_skills.map(skill =>
                <View style={{ flex: 1, alignItems: 'center', padding: 10}}>
                  <TouchableOpacity onPress={() => setSelectedSkill(skill.id)}>
                    <Image 
                      style={{width: 100, height: 100, borderRadius: 20}}
                      source={{
                      uri: imgGallery[imgKey],
                    }}
                    />
                  </TouchableOpacity>
                  <Button key={skill.id} title={skill.name} onPress={() => setSelectedSkill(skill.id)} />
                </View>
            )
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.horizontalContainer}>
                {renderCarousel()}
            </ScrollView>

            {/* Hidden text to maintain formatting */}
            {selectedSkill > 0 ?  <Button title="Try This One" onPress={() => navigation.navigate("Try This One", {selectedSkill: selectedSkill})} /> : <Text style={{padding: 6, color: 'white'}}>Hidden</Text> }
            {selectedSkill > 0 ? <Text style={styles.p}>{state.coping_skills.filter(skill => {return skill.id === selectedSkill})[0].name}</Text> : <Text style={{padding: 6, color: 'white'}}>Hidden</Text> }
            
        </View>
    )
}

export default connect((state)=>({state}))(ChooseASkill)