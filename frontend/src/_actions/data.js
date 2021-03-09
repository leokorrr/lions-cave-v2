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
        .positions()
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
        .links()
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