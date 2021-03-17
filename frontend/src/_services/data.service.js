import axios from 'axios'

export const getProjectsFromAPI = async () => {
    return await axios.get(`/API/projects`)
}
export const getLinksFromAPI = async () => {
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}links`)
}
export const getPositionsFromAPI = async () => {
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}positions`)
}

export default {
    getProjectsFromAPI,
    getLinksFromAPI,
    getPositionsFromAPI
}