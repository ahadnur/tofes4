import { Container, Grid, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import { CaseForm1 } from './caseForm1'
import { CaseForm2 } from './caseForm2'
import { CaseForm3 } from './caseForm3'
import '../Styles/createcase/caseform.css'


export const CaseForm = () => {
    const [show, setShow] = useState('1')

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
    const handleShow = (e) => {
        e.preventDefault();
        console.log("Handle show working", typeof e.currentTarget.id)
        setShow(e.currentTarget.id)
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
        <Container>

            <div className="cform__content__wrapper" >
                <div className="cform__content" style={{
                    backgroundImage: `url('images/oref_hp_bg.png')`,
                    objectFit: 'contain'
                }}>
                    <ul>
                        <li><a href="">Update personal detail</a></li>
                        <li><a href="">Opening a new portfolio</a></li>
                        <li><a href="">My bags</a></li>
                    </ul>
                </div>

            </div>

            <Container>
                <Grid container className="" spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={4}>

                            {
                                navData.map(item => (
                                    <Paper key={item.id} style={{ backgroundColor: item.id === show ? "#4174b3" : '' }} id={item.id} onClick={handleShow} className="c_paper">
                                        <h1>{item.id}</h1>
                                        <h4>{item.label}</h4>
                                    </Paper>
                                ))
                            }

                        </Grid>
                    </Grid>
                </Grid>

            </Container>
            <form>
                {component}
            </form>
        </Container>
    )
}
