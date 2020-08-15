import { combineReducers } from 'redux'
import auth from './auth'
import coping_skills from './coping_skills'
import diary_cards from './diary_cards'
import therapist from './therapist'
import emergency_contacts from './emergency_contacts'
import trackers from './trackers'

export default combineReducers({
    auth,
    coping_skills,
    diary_cards,
    therapist,
    emergency_contacts,
    trackers
})