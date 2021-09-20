import {  Grid, Typography } from '@mui/material'
import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const Footer = () => {
    return (

        <Grid container justifyContent="center">
            <Grid item md={3}>
                <Grid item justifyContent="center">
                    <Typography align="center">
                        <EmailOutlinedIcon />
                    </Typography>
                    <Typography variant="h6" align="center">
                        Reference Documents
                    </Typography>
                    <Typography style={{padding:50}} variant="caption" textAlign="center">
                      Procedure for preparation and submitting a protection a appendix
                      Adjustment in the organizational stucture and the manner of providing
                      the protectice regulatory reponse in PKAR Protected space fuck tables
                      Facilation of a branch on the subject of descending walls
                      Concentration of information in the new website of the National Emergency
                    </Typography>
                    
                </Grid>
            </Grid>
            <Grid item md={3}>
                <Grid>
                    <Typography align="center">
                        <EmailOutlinedIcon />
                    </Typography>
                    <Typography variant="h6" align="center">
                        Guidline and specification
                    </Typography>
                    <Typography variant="caption" align="center">
                      Specification of protection improvements 
                      Specification solutions for protecting the
                      protected space door
                      Industry guidance coordinates in the field of 
                      architectural descending
                      Branch facilition coordinates in the field of
                      educational institutions
                      Branch facilition coordinates in the field of 
                      health institutions
            
                    </Typography>
                </Grid>
            </Grid>
            <Grid item md={3}>
                <Grid>
                    <Typography align="center">
                        <EmailOutlinedIcon />
                    </Typography>
                    <Typography variant="h6" align="center">
                        Regulations
                    </Typography>
                    <Typography variant="caption" align="center">
                      Draft regulations of educational institutions 
                      Welfare institutions 
                      Implemented unified regulations
                      Regulation of healt institution
                      Exemption Policy 2020
                    </Typography>
                </Grid>
            </Grid>
            <Grid item md={3}>
                <Grid>
                    <Typography align="center">
                        <EmailOutlinedIcon />
                    </Typography>
                    <Typography variant="h6" align="center">
                        Procedures and forms
                    </Typography>
                    <Typography variant="caption" align="center">
                       <a href="#">
                           Procedure for submitting and exemption application.
                       </a>
                       Application form for exemption from protection -general
                       Exemption application from - Kindergarden Integrity report
                       for pretected area for the purpose of obtain an exemption,
                       Asylum health report for exemption.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

    )
}
