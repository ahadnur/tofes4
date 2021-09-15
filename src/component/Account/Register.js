import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../Styles/account/register.css'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';

export const Register = () => {
    return (
        <Container maxWidth="lg" className="register__wrapper">
            <CssBaseline />
            <Container maxWidth="sm" className="">
                <Typography style={{ backgroundColor: '#cfe8fc', padding: 20 }} component="h1" >Login</Typography>
                <form className="r__form" noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <label>שם פרטי</label><br />
                            <input /><br />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <label>שם פרטי</label><br />
                            <input /><br />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <label>מספר תעודת זהות</label><br />
                            <input /><br />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <label>שם פרטי</label><br />
                            <input /><br />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <label>שם פרטי</label><br />
                            <input /><br />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <label>טלפון נייד (מספר זה ישמש לצורך התחברות)</label><br />
                            <input /><br />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <label>טלפון נייד נוסף (רשות)</label><br />
                            <input /><br />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <label>שם משרד/גוף מתכנן(רשות)י</label><br />
                            <input /><br />
                        </Grid>
                        <Grid  item xs={12} md={12} sm={12}>
                            <label>דואר אלקטרוני</label><br />
                            <input /><br />
                        </Grid>
                        <Grid style={{  display: 'flex', justifyContent: 'center' }} item xs={12} md={12} sm={12}>
                            <Button style={{minWidth: 200}}  variant="contained" color="primary" >Login</Button>
                        </Grid>

                    </Grid>
                </form>
            </Container>

        </Container>
    )
}
