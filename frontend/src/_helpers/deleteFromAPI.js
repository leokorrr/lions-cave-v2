import axios from 'axios'

export const deleteLinkFromAPI = (id) => {
    return axios.delete(`/API/links/${id}`)
}
export const deleteProjectFromAPI = (id) => {
    return axios.delete(`/API/projects/${id}`)
}
export const deletePositionFromAPI = (id) => {
    return axios.delete(`/API/positions/${id}`)
}
