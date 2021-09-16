import { Container, CssBaseline, Grid, Typography } from '@material-ui/core'
import React from 'react'
import '../Styles/createcase/caseform.css'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export const CaseForm1 = () => {
    return (
        <Container>
            <Grid container justifyContent="center" style={{ marginTop: 20 }}>
                <div className="case__form">
                    <Grid container>
                        <Grid className="bug__type" item md={3}>
                            <AccountBalanceIcon />
                            <h5>New contruction</h5>
                        </Grid>
                        <Grid className="bug__type" item md={3}>
                            <AccountBalanceIcon />
                            <h5>Exemption</h5>
                        </Grid>
                        <Grid className="bug__type" item md={3}>
                            <AccountBalanceIcon />
                            <h5>Form 4</h5>
                        </Grid>
                        <Grid className="bug__type" item md={3}>
                            <AccountBalanceIcon />
                            <h5>Plan changes</h5>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12}>
                            <Typography variant="body2">Sattlement</Typography><br />
                            <input type="text" placeholder="Enter.." /><br />
                        </Grid>
                        <Grid item md={12}>
                            <Typography variant="body2">Commitee</Typography><br />
                            <select className="case_filter">
                                <option>Type of structure</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={3}>
                            <Typography variant="body2">Sattlement</Typography><br />
                            <input type="text" />
                        </Grid>
                        <Grid item md={3}>
                            <Typography variant="body2">Sattlement</Typography><br />
                            <input type="text" />
                        </Grid>
                        <Grid item md={3}>
                            <Typography variant="body2">Sattlement</Typography><br />
                            <input type="text" />
                        </Grid>
                        <Grid item md={3}>
                            <Typography variant="body2">Sattlement</Typography><br />
                            <input type="text" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Typography variant="body2">Street</Typography><br />
                            <input type="text" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">House Number</Typography><br />
                            <input type="text" />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12}>
                            <Typography variant="body2">A number of licence available</Typography><br />
                            <input type="text" placeholder="Enter.." /><br />
                        </Grid>
                    </Grid>
                    <Grid container md={6} spacing={2}>
                        <Grid item>
                            <Typography variant="body2">Application Name</Typography><br />
                            <input type="text" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2"> Talephone Application</Typography><br />
                            <input type="text" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item >
                            <Typography variant="body2">There the skeleton plan</Typography><br />
                            <input type="text" />
                        </Grid>
                        <Grid item >
                            <Typography variant="body2"> Skeleton plane phone</Typography><br />
                            <input type="text" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item >
                            <Typography variant="body2">There the skeleton plan</Typography><br />
                            <textarea rows="4" cols="100"></textarea>
                        </Grid>
                    </Grid>
                </div>
            </Grid>

        </Container>
    )
}
