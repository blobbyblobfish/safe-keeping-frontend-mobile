import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import diarycards from './diarycards'

export default combineReducers({
    auth,
    user,
    diarycards
})