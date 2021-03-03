import {
    GET_PROJECTS,
    GET_LINKS,
    GET_POSITIONS
} from "../_actions/types"

const initialState = {}
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_LINKS:
            return {
                ...state,
                links: payload
            }
        case GET_POSITIONS: 
            return {
                ...state,
                positions: payload
            }
        case GET_PROJECTS: 
            return {
                ...state,
                projects: payload
            }
        default:
            return state
    }
}