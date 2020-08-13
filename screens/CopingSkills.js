import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Button, Image, ScrollView, TouchableOpacity } from 'react-native'

import CopingSkill from '../components/CopingSkill'
import styles from '../StyleSheet'

function CopingSkills( { navigation, state } ) {

  const copingSkills = state.coping_skills

  // **TO DO** have image library to select from
  const imgUrl = "https://images.unsplash.com/photo-1581701545134-c627459217a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

  //Select skill
  let initialState = 0

  if (copingSkills[0]) {
    initialState = copingSkills[0].id
  }

  const [selectedSkill, setSelectedSkill] = useState(initialState)

  function renderCarousel() {
    return copingSkills.map(skill =>
      <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
        <TouchableOpacity onPress={() => setSelectedSkill(skill.id)}>
          <Image 
            style={{width: 100, height: 100, borderRadius: 20}}
            source={{
            uri: imgUrl,
          }}
          />
        </TouchableOpacity>
        <Button key={skill.id} title={skill.name} onPress={() => setSelectedSkill(skill.id)} />
      </View>
    )
  }

  //Render selected skill
  function renderCopingSkill() { 
    const skillToRender = copingSkills.filter(skill => skill.id === selectedSkill)

    if (skillToRender.length > 0) {
      return <CopingSkill key={skillToRender[0].id} skill={skillToRender[0]} navigation={navigation} />
    }
  }
  
  return (
    <View style={styles.container}>     
      <ScrollView
        horizontal
        contentContainerStyle={styles.horizontalContainer}
      >
        {renderCarousel()}
      </ScrollView>

      <View style={{paddingBottom: 40}}>
      <Button 
        title="New Coping Skill"
        onPress={() => navigation.navigate("New Coping Skill")}
      />
      </View>

      <ScrollView>
        {renderCopingSkill()}
      </ScrollView>
    </View>
  )
}

export default connect((state) => ({state}))(CopingSkills)

