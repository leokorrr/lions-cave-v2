import React, { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from 'react-router-dom'
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"
import { login } from "../../_actions/auth"

const required = value => {
    if (!value) {
        return (
            <div>This field is required</div>
        )
    }
}
const Login = props => {
    const form = useRef()
    const checkBtn = useRef()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const {isLoggedIn} = useSelector(state => state.auth)
    const {message} = useSelector(state => state.message)
    const dispatch = useDispatch()
    const onChangeEmail = e => setEmail(e.target.value)
    const onChangePassword = e => setPassword(e.target.value)
    const handleLogin = e => {
        e.preventDefault()
        setLoading(true)
        form.current.validateAll()
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(email, password))
                .then(() => {
                    props.history.push("/admin-panel/projects")
                    window.location.reload()
                })
                .catch(() => {
                    setLoading(false)
                })
        } else {
            setLoading(false)
        }
    }
    if (isLoggedIn) {
        return <Redirect to="/admin-panel/projects"/>
    }
    return (
        <Form onSubmit={handleLogin} ref={form}>
            <Input
                type="text"
                className="form-control"
                name="email"
                placeholder="email"
                value={email}
                onChange={onChangeEmail}
                validations={[required]}
            />
            <br/>
            <Input
                type="password"
                className="form-control"
                name="password"
                placeholder="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
            />
            <button disabled={loading}>
                {loading && (
                    <span>Loading...</span>
                )}
                <span>Login</span>
            </button>
            {message && (
                <h1>{message}</h1>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
    )
}

export default Login