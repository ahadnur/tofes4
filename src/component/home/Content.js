import '../Styles/home/content.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../Styles/account/register.css'
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import  { Link as L }  from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    mod: {
        position: 'absolute',
        top: '10%',
        left: '10%',
        overflow: 'scroll',
        height: '100%',
        display: 'block'
    }
}))
export const Content = () => {

    const classess = useStyles()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <div className="content-wrapper" style={{
                backgroundImage: `url('images/oref_hp_bg.png')`,
                objectFit: 'contain'
            }}>
                <h1 className="content-heading">מערכת פיקוד העורף</h1>
                <h1 style={{ marginBottom: '50px' }}>לאישור בקשות להיתר בנייה</h1>
                <div className="content">
                    <div className="right-content">
                        <div className="right-content-left">
                            <h2>אינך רשום למערכת?</h2>
                            <p>שלום רב! אנחנו מאוד שמחים לקבל אתכם למערכת...</p>
                            <button onClick={handleOpen} className="register__btn">חלה תקלה</button>
                        </div>
                        <div className="right-content-right">
                            <h2>כניסה למערכת למשתמש קיים</h2>
                            <input className="login__input" type="text" placeholder="מספר תעודת זהות" /><br />
                            <input className="login__input" type="text" placeholder="מספר טלפון נייד" /><br />
                            <L to="/dashboard"><button className="login__btn">התחבר</button></L>
                        </div>
                    </div>
                    <div className="left-content">
                        <h3>מערכת רישוי מהנדסים</h3>
                        <p>
                            בשל החגים הקרבים וכן עקב תחלואה גוברת בקרב אנשי המערך, יתכנו עיכובים בבדיקת התוכניות.
                            אנו עושים מאמצים לענות בהקדם.

                            ענף ההנדסה והרגולציה בפיקוד העורף מאחל לכם חג שמח ושנה טובה
                            תפוח בדבש</p>
                    </div>

                </div>
            </div>
            <Modal
                open={open}
                onClose={handleOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={classess.mod}
            >
                <Container style={{ backgroundColor: 'white', marginTop: 20 }} component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Registration to the system
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Last Name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Id Number"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Profession"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Liscense Number"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Mobile Phone (this will be used for connection)"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Additional Mobile Phone (Permission)"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Email"
                                        type="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Name of office / planning body (authority)"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{ backgroundColor: "#ffc478", marginTop: '30px' }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Modal>
        </>
    )
}