import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const  ProtectedRoute = ({ component: Component, layout: Layout, routeView: routeView }) => {
    const {isLoggedIn} = useSelector(state => state.auth)
    if (isLoggedIn) {
        return (
            <Route render={props => (
                <Layout routeView={routeView} location={props} component={Component}/>
            )} />
        )
    } else {
        return <Redirect to="/" />
    }
}
