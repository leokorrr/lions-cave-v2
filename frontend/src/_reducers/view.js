import { SET_VIEW } from "../_actions/types";

const initialState = {name: ''}
export default function(state = initialState, action) {
    const { payload, type } = action
    if (type === SET_VIEW) {
        console.log(payload)
        return {
            ...state,
            name: payload
        }
    } else {
        return state
    }
}