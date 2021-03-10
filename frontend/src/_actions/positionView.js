import { SET_POSITION_VIEW } from './types'

export const setPositionView = (id) => (dispatch) => {
    dispatch({
        type: SET_POSITION_VIEW,
        payload: id
    })
}