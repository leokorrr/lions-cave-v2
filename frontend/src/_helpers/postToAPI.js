import axios from 'axios'

export const postLinksToAPI = data => {
    return axios.post(`/API/links`, data)
}
export const postProjectsToAPI = data => {
    console.log(data)
    return axios.post(`/API/projects`, data)
}
export const postPositionsToAPI = data => {
    return axios.post(`/API/positions`, data)
}
