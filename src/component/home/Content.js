import '../Styles/home/content.css'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
        display: 'block',
    }
}))
export const Content = () => {

    const classes = useStyles()
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
                    <div className="right-content-right">
                            <h2>כניסה למערכת למשתמש קיים</h2>
                            <input className="login__input" type="text" placeholder="מספר תעודת זהות" /><br />
                            <input className="login__input" type="text" placeholder="מספר טלפון נייד" /><br />
                            <L to="/dashboard"><button className="login__btn">התחבר</button></L>
                        </div>
                        <div className="right-content-left">
                            <h2>אינך רשום למערכת?</h2>
                            <p>שלום רב! אנחנו מאוד שמחים לקבל אתכם למערכת...</p>
                            <button onClick={handleOpen} className="register__btn">חלה תקלה</button>
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
                className={classes.mod}
            >
                <Container style={{ backgroundColor: 'white', marginTop: 20 }} component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5" style={{backgroundColor: '#4264a2', width: '100%',color: 'white', padding: '30px'}}>
                            Registration to the system
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2} className="form_control">
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor="fname">First name</label>
                                    <input type="text" name="fname" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor="lname">Last name</label>
                                    <input type="text" name="lname" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor="id">ID number</label>
                                    <input type="text" name="id" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor="profession">Profession</label>
                                    <input type="text" name="profession" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor="license">License number</label>
                                    <input type="text" name="license" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor="mobile">Mobile Phone (this will be used for connection)</label>
                                    <input type="text" name="mobile" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor="additonalMobile">Additional mobile phone (permission)</label>
                                    <input type="text" name="additonalMobile" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor="email">E-mail</label>
                                    <input type="text" name="email" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor="nameOfOffice">Name of office / planning body (authority)</label>
                                    <input type="text" name="nameOfOffice" />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{ backgroundColor: "#ffc478", margin: '30px 0 30px 0' }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Modal>
        </>
    )
}