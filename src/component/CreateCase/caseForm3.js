import { Container, Grid, Typography, Button } from '@material-ui/core'
import React from 'react'
import '../Styles/createcase/caseform.css'

export const CaseForm3 = () => {
    return (
        <Container>
            <Grid container justifyContent="center" style={{marginTop:20}}>
                <div className="case3__form">
                    <h3>Select files to upload</h3>
                    <Typography variant="body2">
                        Select a file name that contain only the following characters:upper case lowercase letter
                        only english, numbers, spaces,commas etc.
                    </Typography>

                    <Grid container spacing={2} style={{ margin: "20px 0" }}>
                        <Grid item md={6}>
                            <Typography variant="body2">Submission plan</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <input type="file" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} style={{ margin: "20px 0" }}>
                        <Grid item md={6}>
                            <Typography variant="body2">Appendics</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <input type="file" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ margin: "20px 0" }}>
                        <Grid item md={6}>
                            <Typography variant="body2">Exemption Application form signed by manicipitlity</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <input type="file" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ margin: "20px 0" }}>
                        <Grid item md={6}>
                            <Typography variant="body2">Existing protected space health report signed by the application editor</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <input type="file" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ margin: "20px 0" }}>
                        <Grid item md={6}>
                            <Typography variant="body2">Protected space images</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <input type="file" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ margin: "20px 0" }}>
                        <Grid item md={6}>
                            <Typography variant="body2">Confirm of recipt of a bank gurentee</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <input type="file" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ margin: "20px 0", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Grid item md={6}>
                            <Typography variant="body2">Additional files (permission)</Typography>
                            <input type="text" style={{padding: "5px", backgroundColor: 'transparent', border: '1px solid white', outline: 'none', color: 'white'}} />
                        </Grid>
                        <Grid item md={6} style={{ margin: "20px 0" }}>
                            <input type="file" />
                        </Grid>
                    </Grid>

                    <Button variant="contained" style={{ marginTop: 20, marginLeft: 20, backgroundColor:'#ffc478' }}>Add File</Button>

                    <div style={{float: 'left'}}>
                        <Button variant="contained" style={{ marginTop: 20, marginLeft: 20, backgroundColor:'#ffc478' }}>Return</Button>
                        <Button variant="contained" style={{ marginTop: 20, marginLeft: 20, backgroundColor:'#ffc478' }}>Open a new file</Button>
                    </div>
                </div>
                
            </Grid>

        </Container>
    )
}
