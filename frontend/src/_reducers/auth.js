import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../_actions/types"

const user = localStorage.getItem("user")
const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null }

console.log(initialState)
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        default:
            return state
    }
}

