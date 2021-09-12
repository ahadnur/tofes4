import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/nav.css'

const Navbar = () => {
    return (
        <nav className="navigation">
            <img src="images/logo.png" alt="avatarImg" />
            <ul className="navigation__links">
                <li><a href="#">פיקוד העורף</a></li>
                <div className="separator"></div>
                <li><NavLink to="/dashboard">מערכת פיקוד העורף לאישור בקשות להיתרי בנייה</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar