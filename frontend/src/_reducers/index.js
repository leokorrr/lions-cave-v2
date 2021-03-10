import { combineReducers } from 'redux'
import auth from './auth'
import message from './message'
import data from './data'
import view from './view'
import positionView from './positionView'

export default combineReducers({
    auth,
    message,
    data,
    view,
    positionView
})