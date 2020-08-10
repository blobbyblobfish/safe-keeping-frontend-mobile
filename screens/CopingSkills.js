import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CopingSkill from '../components/CopingSkill'

function CopingSkills( { navigation, state } ) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  const copingSkills = state.coping_skills

  //Select skill
  let initialState = ''

  if (copingSkills[0]) {
    initialState = copingSkills[0].id
  }

  const [selectedSkill, setSelectedSkill] = useState(initialState)

  function renderCarousel() {
    return copingSkills.map(skill => <Button key={skill.id} title={skill.name} onPress={() => setSelectedSkill(skill.id)} />)
  }

  //Render selected skill
  function renderCopingSkill() { 
    const skillToRender = copingSkills.filter(skill => skill.id === selectedSkill)

    if (skillToRender.length > 0) {
      return <CopingSkill skill={skillToRender[0]} navigation={navigation} />
    }
  }
  
  return (
    <View style={styles.container}>
      <Text>Coping Skills!</Text>

      <ScrollView
        horizontal={true}
      >
        {renderCarousel()}
      </ScrollView>

      {renderCopingSkill()}

      <Button 
        title="New Coping Skill"
        onPress={() => navigation.navigate("New Coping Skill")}
      />
    </View>
  )
}

export default connect((state) => ({state}))(CopingSkills)

