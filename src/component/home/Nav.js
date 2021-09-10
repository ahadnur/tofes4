import React from 'react'
import '../Styles/nav.css'
const Navbar = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="#">מערכת פיקוד העורף לאישור בקשות להיתרי בנייה</a></li>
                <div className="separator"></div>
                <li><a href="#">פיקוד העורף</a></li>
            </ul>
            <img src="images/logo.png"></img>
        </nav>
    )
}
export default Navbar