import {
    GET_PROJECTS,
    GET_LINKS,
    GET_POSITIONS,
    POST_PROJECT,
    POST_LINK,
    POST_POSITION,
    DELETE_PROJECT,
    DELETE_LINK,
    DELETE_POSITION,
} from "./types"
import DataService from '../_services/data.service'

export const getProjects = () => (dispatch) => {
    return DataService
        .getProjectsFromAPI()
        .then(
            res => {
                dispatch({
                    type: GET_PROJECTS,
                    payload: res.data
                })
                return Promise.resolve()
            },
            error => {
                console.log(error)
                return Promise.reject()
            }
        )
}
export const getPositions = () => (dispatch) => {
    return DataService
        .getPositionsFromAPI()
        .then(
            res => {
                dispatch({
                    type: GET_POSITIONS,
                    payload: res.data
                })
                return Promise.resolve()
            },
            error => {
                console.log(error)
                return Promise.reject()
            }
        )
}
export const getLinks = () => (dispatch) => {
    return DataService
        .getLinksFromAPI()
        .then(
            res => {
                dispatch({
                    type: GET_LINKS,
                    payload: res.data
                })
                return Promise.resolve()
            },
            error => {
                console.log(error)
                return Promise.reject()
            }
        )
}