import axios from 'axios'

export const getProjectsFromAPI = async () => {
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}projects`)
}
export const getLinksFromAPI = async () => {
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}links`)
}
export const getPositionsFromAPI = async () => {
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}positions`)
}
export const postLinksToAPI = async data => {
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}links`, data)
}
export const postProjectsToAPI = async data => {
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}projects`, data)
}
export const postPositionsToAPI = async data => {
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}positions`, data)
}
export const deleteLinkFromAPI = async id => {
    return await axios.delete(`${process.env.REACT_APP_BACKEND_API}links/${id}`)
}
export const deleteProjectFromAPI = async id => {
    return await axios.delete(`${process.env.REACT_APP_BACKEND_API}projects/${id}`)
}
export const deletePositionFromAPI = async id => {
    return await axios.delete(`${process.env.REACT_APP_BACKEND_API}positions/${id}`)
}


export default {
    getProjectsFromAPI,
    getLinksFromAPI,
    getPositionsFromAPI,
    postLinksToAPI,
    postProjectsToAPI,
    postPositionsToAPI,
    deleteLinkFromAPI,
    deleteProjectFromAPI,
    deletePositionFromAPI
}