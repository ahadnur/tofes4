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
import { CaseDetailCollaps } from './CaseDetailCollaps'

export default function CaseDetail() {
  const [show, setShow] = useState(false)
  const handleClick = (e) => {
    setShow(!show)
  }
  return (
    <>
      <DashNav />
      <Banner />
      <Container>

        <Grid container justifyContent="center" className="case3__form" style={{ marginTop: 20 }}>
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
          </Grid>
          <Grid container>

            {
              Data.map(item => (
                <CaseDetailCollaps Data={item} />
              ))
            }

            <List
              sx={{ width: '100%', bgcolor: '#3769a0' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              style={{ marginTop: 20 }}

            >

              <ListItemButton onClick={handleClick}>
                {show ? <RemoveIcon /> : <ControlPointIcon />}
                <ListItemText style={{ display: 'flex', justifyContent: 'flex-start' }} primary="Correspondence with the same Command Engineers" />
              </ListItemButton>
              <Collapse in={show ? true : false} timeout="auto" unmountOnExit>
                <Grid container spacing={2} style={{ padding: '20px' }}>
                  <Grid item className="caDeTextArea">
                    <Typography variant="body2">There the skeleton plan</Typography><br />

                    <Box container>
                      <TextareaAutosize
                        aria-label="minimum height"
                        minRows={4}
                        style={{ background: 'none', padding: 20, border: '1px solid white', color: 'white', outline: 'none' }}
                        cols={40}
                      />
                    </Box>
                    <Button style={{ margin: "20px 0" }} variant="contained">
                      Send
                    </Button>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container style={{ marginRight: 10, marginTop: 20 }}>
                  <Grid item xs={12} md={4} style={{ marginRight: 10 }}>
                    <Typography variant="subtitle1">09/09/2021</Typography>
                    <Typography variant="body1">Shalav Levy,English</Typography>
                  </Grid>
                  <Grid item xs={10} md={6} >
                    <Typography align="justify" variant="body2">
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
        {/* <Footer /> */}
      </Container >
    </>
  );
}
