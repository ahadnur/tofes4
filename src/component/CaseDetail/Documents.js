import { Card, CardContent, CardHeader, Container, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
// import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import './detail.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
export const Documents = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Container>
            <Grid container>
                <Grid item md={6} xs={12} style={{marginTop: '50px'}}>
                    {/* <Box> */}
                    <Typography variant="subtitle1">Regulation for case approval</Typography>
                    <Grid item xs={12} md={6}>
                        <ul className="document_link">
                            <li><Link>View by:</Link></li>
                            <li><Link>Approve regulation</Link></li>
                            <li><Link>All regulation</Link></li>
                        </ul>
                    </Grid>
                    {/* </Box> */}
                </Grid>
                <Grid item md={6} xs={12}>
                    <Grid item>
                        <Typography sx={{ fontSize: 14, textAlign: 'left' }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Card sx={{ minWidth: 400 }}>
                            <CardHeader

                                action={
                                    <IconButton onClick={handleClick} aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                // title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardContent>

                                <Typography variant="body2">
                                    Appendix
                                </Typography>
                            </CardContent>

                        </Card>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handleClose}><GetAppOutlinedIcon/>Taken Down</MenuItem>
                            <MenuItem onClick={handleClose}><ArrowForwardOutlinedIcon/>Update</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
