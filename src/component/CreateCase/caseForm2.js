import { Container, Grid, Typography, Button } from '@material-ui/core'
import React from 'react'
import '../Styles/createcase/caseform.css'


export const CaseForm2 = ({display}) => {
    return (

        <Container style={{display: display=== false ? 'none' : 'block'}}>

            <Grid container justifyContent="center" style={{ marginTop: 20 }}>
                <div className="case__form">
                    {/* <Grid container> */}

                    <Grid item md={12}>
                        <Typography variant="body2">User of structur</Typography ><br />
                        <select className="">
                            <option>User of structure</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item>
                            <Typography variant="body2">Number of basement floor</Typography ><br />
                            <select >
                                <option>User of structure</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </Grid>
                        <Grid item>
                            <Typography>Total floor(including basement)</Typography ><br />
                            <select >
                                <option>User of structure</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </Grid>
                    </Grid>
                    <Grid item md={12}>
                        <Typography variant="body2">User of structur</Typography><br />
                        <select>
                            <option>User of structure</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </Grid>
                </div>
            </Grid>

        </Container>
    )
}
