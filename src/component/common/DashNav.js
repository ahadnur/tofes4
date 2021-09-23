import React from 'react'
import { NavLink } from 'react-router-dom'
import './dashNav.css'

const DashNav = () => {
    return (
        <nav className="navigation">
            <div className="right">
                <img src="images/logo.png" alt="avatarImg" />
                <ul className="navigation__links">
                    <li><NavLink to="/register">פיקוד העורף</NavLink></li>
                    <div className="separator"></div>
                    <li><NavLink to="/dashboard">מערכת פיקוד העורף לאישור בקשות להיתרי בנייה</NavLink></li>
                </ul>
            </div>
            <div className="left">
            <ul className="navigation__links">
                    <li>You logged in on {new Date().toLocaleString()}</li>
                    <div className="separator"></div>
                    <li>Log Out</li>
                    <div className="separator"></div>
                    <li>Ashraf</li>
                </ul>
            </div>
        </nav>
    )
}

export default DashNav
