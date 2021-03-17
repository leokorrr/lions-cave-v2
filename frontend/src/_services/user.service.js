import axios from 'axios'
import authHeader from './auth-header'

const getAdminUser = () => {
    return axios.get(`/API/login`, {headers: authHeader()})
}

export default getAdminUser