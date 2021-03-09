import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.svg'

export default function Menu() {
    return (
        <nav>
            <div className="menu">
                <div className="menu__logo-ctn">
                    <NavLink to="/">
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>
                <NavLink to="/" className="menu__link">About</NavLink>
                <NavLink to="/projects" className="menu__link">Projects</NavLink>
                <NavLink to="/positions" className="menu__link">Positions</NavLink>
            </div>
        </nav>
    )
}
