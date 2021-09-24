import { Collapse, Divider, Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import { colData } from './DCollapsData';


export const CollapsData = ({colData}) => {
    const [show, setShow] = useState(false)
    const handleClick = (e) => {
        setShow(!show)
      }
    return (
        <List
        sx={{ width: '100%', bgcolor: '#f4f4f4' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        style={{ marginTop: 20 }}
    >
        <ListItemButton onClick={handleClick} >
            {show ? <RemoveIcon sx={{ color: "#da7023" }} /> : <ControlPointIcon sx={{ color: "#da7023" }} />}
            <ListItemText style={{ display: 'flex', justifyContent: 'flex-start' }} primary={colData.title} />
        </ListItemButton>
        <Collapse in={show ? true : false} timeout="auto" unmountOnExit>
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
                            <Typography variant="caption">{colData.type}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={1}>
                    <Typography variant="subtitle2">Case no</Typography>
                    <Divider />
                    <Typography variant="subtitle2">{colData.caseNo}</Typography>
                </Grid>
                <Grid item md={1}>
                    <Typography variant="subtitle2">T. Last Update</Typography>
                    <Divider />
                    <Typography variant="subtitle2">{colData.tLastUpdate}</Typography>
                </Grid>
                <Grid item md={2}>
                    <Typography variant="subtitle2">T. Target for treatment</Typography>
                    <Divider />
                    <Typography variant="subtitle2">{colData.tTargetForTreatment}</Typography>
                </Grid>
                <Grid item md={2}>
                    <Typography variant="subtitle2">Property Identification</Typography>
                    <Divider />
                    <Typography variant="subtitle2">{colData.propertyIdentification}</Typography>
                </Grid>
                <Grid item md={1}>
                    <Typography variant="subtitle2">Request Editor</Typography>
                    <Divider />
                    <Typography variant="subtitle2">{colData.requestEditor}</Typography>
                </Grid>
                <Grid item md={2}>
                    <Typography variant="subtitle2">Last status</Typography>
                    <Divider />
                    <Grid container>
                        <Grid item md={6}>
                            <Typography variant="subtitle2">{colData.lastStatus.subtitle2}</Typography>
                            <Typography variant="caption">{colData.lastStatus.caption}</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography variant="caption"><a href>view the file</a></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Collapse>
    </List>
    )
}
