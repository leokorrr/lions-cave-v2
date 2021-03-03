import {
    GET_PROJECTS,
    GET_LINKS,
    GET_POSITIONS
} from "./types"
import DataService from '../_services/data.service'

export const getProjects = () => (dispatch) => {
    return DataService
        .projects()
        .then(
            data => {
                dispatch({
                    type: GET_PROJECTS,
                    payload: data
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
        .positions()
        .then(
            data => {
                dispatch({
                    type: GET_POSITIONS,
                    payload: data
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
        .links()
        .then(
            data => {
                dispatch({
                    type: GET_LINKS,
                    payload: data
                })
                return Promise.resolve()
            },
            error => {
                console.log(error)
                return Promise.reject()
            }
        )
}