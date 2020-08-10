import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import coping_skills from './coping_skills'
import diary_cards from './diary_cards'
import emergency_contacts from './emergency_contacts'
import trackers from './trackers'

export default combineReducers({
    auth,
    user,
    coping_skills,
    diary_cards,
    emergency_contacts,
    trackers
})