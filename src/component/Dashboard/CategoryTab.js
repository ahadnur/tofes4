import React from 'react'
import { Nav } from 'react-bootstrap'

const CategoryTab = () => {
    return (
        <>
            <Nav className="justify-content-center" activeKey="/home" variant="tabs" style={{margin: "20px 0"}}>
                <Nav.Item>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/documents">Documents</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin">Admin</Nav.Link>
                </Nav.Item>
                    <Nav.Item>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default CategoryTab
