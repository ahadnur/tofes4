import { Container, CssBaseline, Grid, Paper } from '@material-ui/core'
import React from 'react'
import '../Styles/createcase/caseform.css'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export const CaseForm = () => {
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

            <Grid container className="" spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={4}>
                        <Paper style={{ backgroundColor: "#4174b3" }} className="c_paper">
                            <h1 style={{ color: '#ff9a43' }}>1</h1>
                            <h4>Detail of case</h4>
                        </Paper>
                        <Paper className="c_paper">
                            <h1>2</h1>
                            <h4>Documents</h4>
                        </Paper>
                        <Paper className="c_paper">
                            <h1>3</h1>
                            <h4>Documents</h4>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justifyContent="center" style={{marginTop:20}}>
                <form className="case__form">
                    <Grid className="case__form__grid" container justifyContent="center">
                        <Paper elevation={0} className="c__form_type"  md={3}>
                            <AccountBalanceIcon />
                            <h5>New contruction</h5>
                        </Paper>
                        <Paper elevation={0} className="c__form_type"  md={3}>
                            <AccountBalanceIcon />
                            <h5>Exemption</h5>
                        </Paper>
                        <Paper elevation={0} className="c__form_type"  md={3}>
                            <AccountBalanceIcon />
                            <h5>Form 4</h5>
                        </Paper>
                        <Paper elevation={0} className="c__form_type"  md={3}>
                            <AccountBalanceIcon />
                            <h5>Plan changes</h5>
                        </Paper>
                    </Grid>
                </form>
            </Grid>
        </Container>
    )
}
