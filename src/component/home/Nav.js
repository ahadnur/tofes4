import React from 'react'
import '../Styles/nav.css'
const Navbar = () => {
    return (
        <nav className="navigation">
            <img src="images/logo.png" alt="avatarImg" />
            <ul className="navigation__links">
                <li><a href="#">פיקוד העורף</a></li>
                <div className="separator"></div>
                <li><a href="#">מערכת פיקוד העורף לאישור בקשות להיתרי בנייה</a></li>
            </ul>
        </nav>
    )
}
export default Navbar