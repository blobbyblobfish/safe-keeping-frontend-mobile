import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Button, ScrollView } from 'react-native'

import CopingSkill from '../components/CopingSkill'
import styles from '../StyleSheet'

function CopingSkills( { navigation, state } ) {

  const copingSkills = state.coping_skills

  //Select skill
  let initialState = 0

  if (copingSkills[0]) {
    initialState = copingSkills[0].id
  }

  const [selectedSkill, setSelectedSkill] = useState(initialState)

  function renderCarousel() {
    return copingSkills.map(skill =>
      <View>
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
      <Button 
        title="New Coping Skill"
        onPress={() => navigation.navigate("New Coping Skill")}
      />

      <ScrollView
        contentContainerStyle={styles.container}
        horizontal={true}
      >
        {renderCarousel()}
      </ScrollView>

      <ScrollView>
        {renderCopingSkill()}
      </ScrollView>
    </View>
  )
}

export default connect((state) => ({state}))(CopingSkills)

