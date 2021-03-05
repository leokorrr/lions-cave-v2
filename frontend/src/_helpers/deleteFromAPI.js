import axios from 'axios'

export const deleteLinkFromAPI = (id) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_API}links/${id}`)
}
export const deleteProjectFromAPI = (id) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_API}projects/${id}`)
}
export const deletePositionFromAPI = (id) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_API}positions/${id}`)
}
