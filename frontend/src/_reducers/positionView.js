import { SET_POSITION_VIEW } from '../_actions/types'

const initialState = {positionViewId: '6048992cf260da2eee28a13c'}
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