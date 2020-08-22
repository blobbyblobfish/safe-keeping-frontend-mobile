import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Button, Image, ScrollView, TouchableOpacity } from 'react-native'

import CopingSkill from '../components/CopingSkill'
import styles from '../StyleSheet'

function CopingSkills( { navigation, state } ) {

  //Get coping skills and set first as default selected skill
  const copingSkills = state.coping_skills

  let initialState = 0

  if (copingSkills[0]) {
    initialState = copingSkills[0].id
  }

  // **TO DO** have image library to select from
  const imgKey = "waves"
  const imgGallery = {
      waves: "https://images.unsplash.com/photo-1581701545134-c627459217a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  }

  //Controlled inputs
  const [selectedSkill, setSelectedSkill] = useState(initialState)
  
  //Render carousel
  function renderCarousel() {
    
    return copingSkills.map(skill => {
      let opacity = .65

      if (skill.id === selectedSkill) {
        opacity = 1
      }
      
      return (
        <TouchableOpacity key={`touchable-opacity-${skill.id}`} style={{ flex: 1, alignItems: 'center' }} onPress={() => {setSelectedSkill(skill.id)}}>
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

  //Render selected skill
  function renderCopingSkill() { 
    const skillToRender = copingSkills.filter(skill => skill.id === selectedSkill)

    if (skillToRender.length > 0) {
      return <CopingSkill key={skillToRender[0].id} skill={skillToRender[0]} navigation={navigation} />
    }
  }
  
  return (
    <View style={styles.container}>   

      {/* Coping Skill selection carousel */}
      <ScrollView horizontal indicatorStyle='white' contentContainerStyle={styles.horizontalContainer}>
        {renderCarousel()}
      </ScrollView>

      <View style={{paddingBottom: 20}}>
      <Button 
        title="New Coping Skill"
        onPress={() => navigation.navigate("New Coping Skill")}
      />
      </View>

      {/* Render selected coping skill */}
      <ScrollView contentContainerStyle={{ width: 325, height: 250}}>
        {renderCopingSkill()}
      </ScrollView>
    </View>
  )
}

export default connect((state) => ({state}))(CopingSkills)

