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
        return state.coping_skills.map(skill => {
            let opacity = .65

            if (skill.id === selectedSkill) {
                opacity = 1
            }
        
            return (
                <TouchableOpacity key={`touchable-opacity-${skill.id}`} style={{ flex: 1, alignItems: 'center', padding: 10}} onPress={() => setSelectedSkill(skill.id)}>
                    <Image
                        key={`image-${skill.id}`}
                        style={{width: 100, height: 100, borderRadius: 20, opacity: opacity}}
                        source={{
                        uri: imgGallery[imgKey]
                    }}/>
                    <Button key={skill.id} title={skill.name} onPress={() => setSelectedSkill(skill.id)} />
                </TouchableOpacity>
            )
            }
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal indicatorStyle='white' contentContainerStyle={styles.smallHorizontalContainer}>
                {renderCarousel()}
            </ScrollView>

            {selectedSkill > 0 ?  <Button title="Try This One" onPress={() => navigation.navigate("Try This One", {selectedSkill: selectedSkill})} /> : null }
            {selectedSkill > 0 ? <Text style={{marginBottom: 100}}>{state.coping_skills.filter(skill => {return skill.id === selectedSkill})[0].name}</Text> : null }
            
        </View>
    )
}

export default connect((state)=>({state}))(ChooseASkill)