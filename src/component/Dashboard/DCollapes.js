import { Collapse, Divider, Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import { colData } from './DCollapsData';
export const DCollapes = () => {
    const [show, setShow] = useState({
        id: '',
        open: false
    })

    const handleClick = (e) => {

        setShow({ ...show, id: e.currentTarget.id, open: !show.open })
    };
    return (

        <Grid container>
            {
                colData.map(item => (
                    <List
                        sx={{ width: '100%', bgcolor: '#f4f4f4' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        style={{ marginTop: 20 }}
                    >
                        <ListItemButton id={item.id} onClick={handleClick} >
                            {show.id === item.id && show.open ? <RemoveIcon sx={{ color: "#da7023" }} /> : <ControlPointIcon sx={{ color: "#da7023" }} />}
                            <ListItemText style={{ display: 'flex', justifyContent: 'flex-start' }} primary={item.title} />
                        </ListItemButton>
                        <Collapse in={show.id === item.id && show.open ? true : false} timeout="auto" unmountOnExit>
                            <Grid style={{ backgroundColor: 'white' }} container spacing={2}>
                                <Grid item md={3}>
                                    <Typography variant="subtitle2">Type</Typography>
                                    <Divider />
                                    <Grid container>
                                        <Grid item md={4} style={{ display: 'flex', paddingTop: 2, color: "#da7023" }} gutterbottom>
                                            <ClearIcon fontSize="small" />
                                            <Typography variant="caption">Delete</Typography>
                                        </Grid>
                                        <Grid item md={8}>
                                            <Typography variant="subtitle2">New construction</Typography>
                                            <Typography variant="caption">{item.type}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={1}>
                                    <Typography variant="subtitle2">Case no</Typography>
                                    <Divider />
                                    <Typography variant="subtitle2">{item.caseNo}</Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <Typography variant="subtitle2">T. Last Update</Typography>
                                    <Divider />
                                    <Typography variant="subtitle2">{item.tLastUpdate}</Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography variant="subtitle2">T. Target for treatment</Typography>
                                    <Divider />
                                    <Typography variant="subtitle2">{item.tTargetForTreatment}</Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography variant="subtitle2">Property Identification</Typography>
                                    <Divider />
                                    <Typography variant="subtitle2">{item.propertyIdentification}</Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <Typography variant="subtitle2">Request Editor</Typography>
                                    <Divider />
                                    <Typography variant="subtitle2">{item.requestEditor}</Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography variant="subtitle2">Last status</Typography>
                                    <Divider />
                                    <Grid container>
                                        <Grid item md={6}>
                                            <Typography variant="subtitle2">{item.lastStatus.subtitle2}</Typography>
                                            <Typography variant="caption">{item.lastStatus.caption}</Typography>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Typography variant="caption"><a href>view the file</a></Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Collapse>
                    </List>
                ))
            }
        </Grid>
    )
}
