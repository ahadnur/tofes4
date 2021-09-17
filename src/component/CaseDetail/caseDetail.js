import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import { Container, Divider, Grid, ListItemText, Typography } from '@material-ui/core';
import { Banner } from '../common/banner';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveIcon from '@mui/icons-material/Remove';
import { Data, headData } from './Data';

export default function CaseDetail() {
  const [show, setShow] = useState({
    id: '',
    open: false
  })

  const handleClick = (e) => {

    setShow({ ...show, id: e.currentTarget.id, open: !show.open })
  };

  console.log(show)
  return (
    <Container>
      <Banner />
      <Grid container justifyContent="center" style={{ marginTop: 20 }}>
        <Grid className="case3__form">
          <Grid container spacing={4} >
            <Grid item md={2}>
              <Typography variant="h5">Detail of the case</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography variant="body2">address</Typography>
              <Typography variant="body1">Beer sheva, 1 1</Typography>
            </Grid>
            <Divider orientation="vertical" style={{ backgroundColor: 'white', height: 50, marginTop: 16 }} flexItem />
            {
              headData.map(item => (
                <>
                  <Grid key={item.body2} item md={1}>
                    <Typography variant="body2">{item.body2}</Typography>
                    <Typography variant="body1">{item.body1}</Typography>
                  </Grid>
                  <Divider orientation="vertical" style={{ backgroundColor: 'white', height: 50, marginTop: 16 }} flexItem />
                </>
              ))
            }
            <Grid item md={1}>
              <Typography variant="body2">Last updated</Typography>
              <Typography variant="body1">09/09/2021</Typography>
            </Grid>

          </Grid>
          <Grid container>
            {
              Data.map(item => (
                <List key={item.title}
                  sx={{ width: '100%', bgcolor: '#3769a0' }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  style={{ marginTop: 20 }}
                >
                  <ListItemButton id={item.id} onClick={handleClick}>
                    {show.id === item.id && show.open ? <RemoveIcon /> : <ControlPointIcon />}
                    <ListItemText style={{ display: 'flex', justifyContent: 'flex-start' }} primary={item.title} />
                  </ListItemButton>
                  <Collapse in={show.id === item.id && show.open ? true : false} timeout="auto" unmountOnExit>
                    <Grid container spacing={2}>
                      {
                        item.itemData.map(subItem => (
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

              ))
            }
            <List
              sx={{ width: '100%', bgcolor: '#3769a0' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              style={{ marginTop: 20 }}

            >

              <ListItemButton id="c3" onClick={handleClick}>
                {"c3" === show.id && show.open ? <RemoveIcon /> : <ControlPointIcon />}
                <ListItemText style={{ display: 'flex', justifyContent: 'flex-start' }} primary="Correspondence with the same Command Engineers" />
              </ListItemButton>
              <Collapse in={show.id === "c3" && show.open ? true : false} timeout="auto" unmountOnExit>
                <Grid container spacing={2}>
                  <Grid item >
                    <Typography variant="body2">There the skeleton plan</Typography><br />
                    <textarea rows="4" cols="100"></textarea>
                  </Grid>
                </Grid>
              </Collapse>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Container >
  );
}
