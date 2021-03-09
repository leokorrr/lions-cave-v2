import { combineReducers } from 'redux'
import auth from './auth'
import message from './message'
import data from './data'
import view from './view'

export default combineReducers({
    auth,
    message,
    data,
    view
})