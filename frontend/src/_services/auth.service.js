import axios from 'axios'
import jwt from 'jwt-decode'

const login = (email, password) => {
    return axios
        .post(`${process.env.REACT_APP_BACKEND_API}login`, {
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