import { Container, Grid, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import { CaseForm1 } from './caseForm1'
import { CaseForm2 } from './caseForm2'
import { CaseForm3 } from './caseForm3'
import '../Styles/createcase/caseform.css'
import { Banner } from '../common/banner'
import DashNav from '../common/DashNav'

const navData = [
    {
        id: '1',
        label: "Detail of case",
    },
    {
        id: '2',
        label: "Detail of building",
    },
    {
        id: '3',
        label: "Documents",
    },
]

export const CaseForm = () => {
    const [show, setShow] = useState('1')
    const [color1, setColor1] = useState("#4174b3")
    const [color2, setColor2] = useState("")
    const [color3, setColor3] = useState("")

    const handleChange1 = (event) => {
        setShow(event.currentTarget.id)
        setColor1("#4174b3")
        setColor2("")
        setColor3("")
    }
    const handleChange2 = (event) => {
        setShow(event.currentTarget.id)
        setColor2("#4174b3")
        setColor3("")
    }
    const handleChange3 = (event) => {
        setShow(event.currentTarget.id)
        setColor3("#4174b3")
    }
    let component;
    if (show === '1') {
        component = <CaseForm1 />
    } else if (show === '2') {
        component = <CaseForm2 />
    } else if (show === '3') {
        component = <CaseForm3 />
    }

    return (
        <>
            <DashNav />
            <Banner />
            <Container>
                <Grid container className="" spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={4} style={{ margin: "20px 0 0 0" }}>

                            <Grid item xs={12} md={4}>
                                <Paper id="1" onClick={handleChange1} style={{ backgroundColor: color1 }} className="c_paper">
                                    <h1>1</h1>
                                    <h4>Detail of case</h4>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Paper id="2" onClick={handleChange2} style={{ backgroundColor: color2 }} className="c_paper">
                                    <h1>2</h1>
                                    <h4>Detail of building</h4>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Paper id="3" onClick={handleChange3} style={{ backgroundColor: color3 }} className="c_paper">
                                    <h1>3</h1>
                                    <h4>Documents</h4>
                                </Paper>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <form>
                    {component}
                </form>
            </Container>
        </>
    )
}
