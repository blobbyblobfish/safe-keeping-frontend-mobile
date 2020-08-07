import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import diary_cards from './diary_cards'
import trackers from './trackers'

export default combineReducers({
    auth,
    user,
    trackers,
    diary_cards
})