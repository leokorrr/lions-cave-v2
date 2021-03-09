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
export const deleteLinkFromAPI = (id) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_API}links/${id}`)
}
export const deleteProjectFromAPI = (id) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_API}projects/${id}`)
}
export const deletePositionFromAPI = (id) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_API}positions/${id}`)
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