import axios from 'axios'
import authHeader from './auth-header'

const getAdminUser = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}login`, {headers: authHeader()})
}

export default getAdminUser