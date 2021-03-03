import axios from 'axios'

const links = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}links`)
        .then((res) => console.log(res.data))
}
const projects = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}projects`)
        .then((res) => console.log(res.data))
}
const positions = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}positions`)
    .then((res) => console.log(res.data))
}

export default {
    links,
    projects,
    positions
}