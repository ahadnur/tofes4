import React from 'react'
import { Content } from './Content'
import Footer from './Footer'
import NavBar from '../common/NavBar'

import '../Styles/dashboard/dContent.css'


export const Home = () => {
    
    return (
        <>
            <NavBar />
            <Content />
            <Footer />
        </>
    )
}
