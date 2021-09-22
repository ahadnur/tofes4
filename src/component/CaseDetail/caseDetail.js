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
import { Footer } from './Footer';
import './caseDetail.css'

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
      <Grid container justifyContent="center" className="case3__form" style={{ marginTop: 20 }}>
<<<<<<< HEAD
        <Grid container spacing={4} >
          <Grid item md={2}>
            <Typography variant="h6">Detail of the case</Typography>
          </Grid>
          <Grid item md={1}>
            <Typography variant="body2">Address</Typography>
            <Typography variant="body1">Beer sheva, 1 1</Typography>
          </Grid>
          <Divider orientation="vertical" style={{ backgroundColor: 'white', height: 50, marginTop: 16 }} flexItem />
          {
            headData.map(item => (
              <>
                <Grid key={item.body2} item md={1}>
                  <Typography variant="body2" className="caseHeader">{item.body2}</Typography>
                  <Typography variant="body1" className="">{item.body1}</Typography>
                </Grid>
                <Divider orientation="vertical" style={{ backgroundColor: 'white', height: 50, marginTop: 16 }} flexItem />
              </>
            ))
          }
          <Grid item md={1}>
            <Typography variant="body2" className="lastCaseHeader">Last updated</Typography>
            <Typography variant="body1" className="lastCaseHeader">09/09/2021</Typography>
          </Grid>

=======
        <Grid justifyContent="center" className="case-detail" container spacing={4} >
          <div>
            <h3>Detail of the case</h3>
          </div>
          <div>
            <p>Address</p>
            <h5>Beer sheba</h5>
          </div>
          <div>
            <p>Block</p>
            <h5>1</h5>
          </div>
          <div>
            <p>Smoot</p>
            <h5>1</h5>
          </div>
          <div>
            <p>Court</p>
            <h5>1</h5>
          </div>
          <div>
            <p>Plane</p>
            <h5>1</h5>
          </div>
          <div>
            <p>Licening file number available</p>
            <h5>1</h5>
          </div>
          <div>
            <p>Last updated</p>
            <h5>09/09/2021</h5>
          </div>
>>>>>>> d57dd1a801379ff91ec0361aac7dc5fc08aaa42d
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
                  {/* <textarea style={{ marginBottom: 10 }} rows="4" cols="100"></textarea> */}
                  <Box container>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={4}
                      placeholder="Minimum 3 rows"
                      style={{ width: 200 }}
                    />
                  </Box>
                  <Button style={{ marginRight: 10, marginBottom: 20 }} variant="contained">
                    <SendIcon style={{ minWidth: 30 }} /> Send
                  </Button>
                </Grid>
              </Grid>
              <Divider />
              <Grid container style={{ marginRight: 10, marginTop: 20 }}>
                <Grid item xs={12} md={4} style={{ marginRight: 10 }}>
                  <Typography variant="subtitle1">09/09/2021</Typography>
                  <Typography variant="body1">Shalav Levy,English</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography align="center" variant="body2">
                    Hello, it is no clear what dcument you uploaded,
                    there is no need for what you uploaded.
                    If it is new submission, submit a plan accordance with the procedure
                    for perparing a protection and submission appendix, which is at
                    the buttom of the page in the category of reference
                    dociments and submit the application in the DWF file reference and further processing.u
                  </Typography>
                </Grid>
              </Grid>
            </Collapse>
          </List>
        </Grid>
      </Grid>
      <Bottom />
      <Documents />
      <Bottom />
      <Footer />
    </Container >
  );
}
