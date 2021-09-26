import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from './img/logo.png'

const DashNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{padding: "20px"}}>

            <Navbar.Brand href="/dashboard">
                <img
                    alt=""
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#">HFC</Nav.Link>
                    {/* <Nav.Link href="#features">Front Command system for approving applications for building permits</Nav.Link> */}
                    <Nav.Link href="/">Home</Nav.Link>
                
                </Nav>
                <Nav className="justify-content-end" style={{width: '100%'}}>
                    <Nav.Link href="#">You logged in on: {new Date().toLocaleString('en-US')}</Nav.Link>
                    <Nav.Link href="/">Log Out</Nav.Link>
                    <Nav.Link href="#">Ashraf</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default DashNav
