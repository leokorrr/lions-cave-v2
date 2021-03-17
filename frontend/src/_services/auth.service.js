import axios from 'axios'
import jwt from 'jwt-decode'

const login = (email, password) => {
    return axios
        .post(`/API/login`, {
            email,
            password
        })
        .then(res => {
            console.log(jwt(res.data.token))
            if(res.data.token) localStorage.setItem("user", JSON.stringify(jwt(res.data.token)))
            return res.data
        })
}

const logout = () => {
    localStorage.removeItem("user")
}

export default {
    login,
    logout
}