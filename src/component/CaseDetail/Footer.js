import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
export const Footer = () => {
    return (
        <Container>
            <Grid container justifyContent="center">
                <Grid item >
                    <Card sx={{ minWidth: 275 }} >
                        <CardContent>
                            <DraftsIcon />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <DraftsIcon />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <DraftsIcon />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <DraftsIcon />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
