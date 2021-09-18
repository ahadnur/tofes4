import React, { useState } from 'react'
import { Content } from './Content'
import Footer from './Footer'
import Navbar from '../common/Nav'
import '../Styles/dashboard/dContent.css'


export const Home = () => {
    
    return (
        <>
            <Navbar />
            <Content />
            <Footer />
        </>
    )
}
