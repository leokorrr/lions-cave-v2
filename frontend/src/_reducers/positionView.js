import { SET_POSITION_VIEW } from '../_actions/types'

const initialState = {positionViewId: '60489863f260da2eee28a13b'}
export default function(state = initialState, action) {
    const { payload, type } = action
    if (type === SET_POSITION_VIEW) {
        return {
            ...state,
            positionViewId: payload
        }
    } else {
        return state
    }
}