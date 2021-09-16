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
                    {/* <Grid container spacing={2}> */}
                    <label>שם פרטי</label><br />
                    <input type="text" /><br />

                    <label>שם פרטי</label><br />
                    <input type="text" /><br />



                    <label>מספר תעודת זהות</label><br />
                    <input type="text" /><br />

                    <label>שם פרטי</label><br />
                    <input type="text" /><br />

                    <label>שם פרטי</label><br />
                    <input type="text" /><br />

                    <label>טלפון נייד (מספר זה ישמש לצורך התחברות)</label><br />
                    <input type="text" /><br />

                    <label>טלפון נייד נוסף (רשות)</label><br />
                    <input type="text" /><br />

                    <label>שם משרד/גוף מתכנן(רשות)י</label><br />
                    <input /><br />

                    <label>דואר אלקטרוני</label><br />
                    <input type="text" /><br />


                    <Button style={{ minWidth: 200 }} variant="contained" color="primary" >Login</Button>


                    {/* </Grid> */}
                </form>
            </Container>

        </Container>
    )
}
