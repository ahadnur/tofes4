import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import { Container, Divider, Grid, ListItemText, Typography } from '@material-ui/core';
import { Banner } from '../common/banner';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveIcon from '@mui/icons-material/Remove';
import { Data, headData } from './Data';
import { Button, TextareaAutosize } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';
import { Bottom } from './Bottom';
import { Documents } from './Documents';
import DashNav from '../common/DashNav';
import './caseDetail.css'

export const CaseDetailCollaps = ({Data}) => {
    const [show, setShow] = useState(false)
    const handleClick = (e) => {
      setShow(!show)
    }
    return (
        <List 
                sx={{ width: '100%', bgcolor: '#3769a0' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                style={{ marginTop: 20 }}
              >
                <ListItemButton  onClick={handleClick}>
                  {show ? <RemoveIcon /> : <ControlPointIcon />}
                  <ListItemText style={{ display: 'flex', justifyContent: 'flex-start' }} primary={Data[0]} />
                </ListItemButton>
                <Collapse in={show ? true : false} timeout="auto" unmountOnExit>
                  <Grid container spacing={2} style={{ padding: "20px" }}>
                    {
                      Data[1].map(subItem => (
                        <Grid item md={4}>
                          <Typography align="center" variant="subtitle2">{subItem.title}</Typography>
                          <Divider style={{ backgroundColor: 'white' }} />
                          {
                            subItem.capTitle.map(subsubItem => (
                              <>
                                <Typography variant="caption">{subsubItem.caption}</Typography>
                                <Typography variant="subtitle1">{subsubItem.subtitle}</Typography>
                              </>
                            ))
                          }
                        </Grid>
                      ))
                    }
                  </Grid>
                </Collapse>
              </List>

    )
}
