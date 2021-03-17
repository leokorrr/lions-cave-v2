import axios from 'axios'

export const getProjectsFromAPI = async () => {
    return await axios.get(`/API/projects`)
}
export const getLinksFromAPI = async () => {
    return await axios.get(`/API/links`)
}
export const getPositionsFromAPI = async () => {
    return await axios.get(`/API/positions`)
}

export default {
    getProjectsFromAPI,
    getLinksFromAPI,
    getPositionsFromAPI
}