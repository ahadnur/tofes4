import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

export const CaseForm3 = () => {
    return (
        <Container>
            <Grid container justifyContent="center" style={{ marginTop: 20 }}>
                <div className="case3__form">
                    <h3>Select files to upload</h3>
                    <Typography variant="body2">
                        Select a file name that contain only the following characters:upper case lowercase letter
                        only english, numbers, spaces,commas etc.
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography variant="body2">Submission plan</Typography>
                        </Grid>
                        <Grid item md={6}>

                            <input type="file" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography variant="body2">Appendics</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <input type="file" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography variant="body2">Exemption Application form signed by manicipitlity</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <input type="file" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography variant="body2">Existing protected space health report signed by the application editor</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <input type="file" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography variant="body2">Protected space images</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <input type="file" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography variant="body2">Confirm of recipt of a bank gurentee</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <input type="file" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography variant="body2">Appendics</Typography>
                            <input type="text" placeholder="Enter description of file" />
                        </Grid>
                        <Grid item md={6}>
                            {/* <label>Addition files</label> */}
                            {/* <Typography variant="body2">Addition files</Typography> */}

                            <input type="file" />
                        </Grid>
                    </Grid>


                </div>
            </Grid>

        </Container>
    )
}
