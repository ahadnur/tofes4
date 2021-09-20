import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
export const Bottom = () => {
    return (
        <Container style={{ marginTop: 20 }}>
            <Grid container justifyContent="center" spacing={2} >
                <Grid item xs={12} md={4}>
                    <Typography style={{ backgroundColor: "#f4f4f4", padding: 4 }} variant="subtitle1">Last saved on 09/09/2021</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="subtitle1">
                        <Button sx={{ borderColor: '#ffc796' }} variant="outlined" fullWidth><SaveAltOutlinedIcon /> Save </Button>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="subtitle1">
                        <Button sx={{ borderColor: '#ffc796' }} variant="outlined" fullWidth><SaveAltOutlinedIcon /> Save and Send to Engineer </Button>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}
