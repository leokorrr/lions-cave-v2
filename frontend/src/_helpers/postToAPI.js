import axios from 'axios'

export const postLinksToAPI = data => {
    return axios.post(`${process.env.REACT_APP_BACKEND_API}links`, data)
}
export const postProjectsToAPI = data => {
    console.log(data)
    return axios.post(`${process.env.REACT_APP_BACKEND_API}projects`, data)
}
export const postPositionsToAPI = data => {
    return axios.post(`${process.env.REACT_APP_BACKEND_API}positions`, data)
}
