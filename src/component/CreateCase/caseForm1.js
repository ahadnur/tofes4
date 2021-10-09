import { Container, Grid, Typography, Button } from '@material-ui/core'
import React, { useState } from 'react'
// import '../Styles/createcase/caseform.css'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { IconButton } from '@mui/material';


export const CaseForm1 = () => {
    const [state1, setState1] = useState("")
    const [state2, setState2] = useState("")
    const [state3, setState3] = useState("")
    const [state4, setState4] = useState("")


    const handleAccountBalanceIcon1 = (e) => {
        setState1(state1 === "white" ? "" : "white")
    }
    const handleAccountBalanceIcon2 = (e) => {
        setState2(state1 === "white" ? "" : "white")
    }
    const handleAccountBalanceIcon3 = (e) => {
        setState3(state1 === "white" ? "" : "white")
    }
    const handleAccountBalanceIcon4 = (e) => {
        setState4(state1 === "white" ? "" : "white")
    }
    return (
        <Container>
            <Grid container justifyContent="center" style={{ marginTop: 20,color:"black" }}>
                <div className="case__form">
                    <Grid container>
                        <Grid className="bug__type" item md={3}>
                            <IconButton style={{ color: state1 }} onClick={handleAccountBalanceIcon1}>
                                <AccountBalanceIcon />
                            </IconButton>
                            <h5>New contruction</h5>
                        </Grid>
                        <Grid className="bug__type" item md={3}>
                            <IconButton style={{ color: state2 }} onClick={handleAccountBalanceIcon2}>
                                <AccountBalanceIcon />
                            </IconButton>
                            <h5>Exemption</h5>
                        </Grid>
                        <Grid className="bug__type" item md={3}>
                            <IconButton style={{ color: state3 }} onClick={handleAccountBalanceIcon3}>
                                <AccountBalanceIcon />
                            </IconButton>
                            <h5>Form 4</h5>
                        </Grid>
                        <Grid className="bug__type" item md={3}>
                            <IconButton style={{ color: state4 }} onClick={handleAccountBalanceIcon4}>
                                <AccountBalanceIcon />
                            </IconButton>
                            <h5>Plan changes</h5>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12} xs={12} style={{marginTop: 50}}>
                            <Typography variant="body2">Sattlement</Typography>
                            <input type="text" placeholder="Sattlement"/>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Typography variant="body2">Commitee</Typography>
                            <select >
                                <option>Type of structure</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} >
                        <Grid item >
                            <Typography variant="body2">Sattlement</Typography>
                            <input type="text" />
                        </Grid>
                        <Grid item >
                            <Typography variant="body2">Smooth</Typography>
                            <input type="text" />
                        </Grid>
                        <Grid item >
                            <Typography variant="body2">Lot Number</Typography>
                            <input type="text" style={{ color: 'white' }} />
                        </Grid>
                        <Grid item >
                            <Typography variant="body2">Program Number</Typography>
                            <input type="text" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Typography variant="body2">Street</Typography>
                            <input type="text" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">House Number</Typography>
                            <input type="text" />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12}>
                            <Typography variant="body2">A number of licence available</Typography>
                            <input type="text" />
                        </Grid>
                    </Grid>
                    <Grid container md={6} spacing={2}>
                        <Grid item>
                            <Typography variant="body2">Application Name</Typography>
                            <input type="text" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2"> Talephone Application</Typography>
                            <input type="text" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item >
                            <Typography variant="body2">There the skeleton plan</Typography>
                            <input type="text" />
                        </Grid>
                        <Grid item >
                            <Typography variant="body2"> Skeleton plane phone</Typography>
                            <input type="text" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item >
                            <Typography variant="body2">There the skeleton plan</Typography>
                            <textarea rows="4" cols="50" style={{ backgroundColor: 'transparent', border: '1px solid white', outline: 'none', padding: '10px', color: 'white' }}></textarea>
                        </Grid>
                    </Grid>
                    {/* <Button variant="contained" style={{ marginTop: 20, backgroundColor: '#ffc478' }}>Continue</Button> */}
                </div>
            </Grid>
        </Container>
    )
}
