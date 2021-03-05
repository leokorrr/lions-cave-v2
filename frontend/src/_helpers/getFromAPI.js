import axios from 'axios'

export const getLinksFromAPI = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}links`)
}
export const getProjectsFromAPI = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}projects`)
}
export const getPositionsFromAPI = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}positions`)
}
