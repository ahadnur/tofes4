import { Container, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import "../Styles/createcase/caseform.css";
import { Form } from "react-bootstrap";

export const CaseForm3 = ({ display }) => {
  return (
    <Container style={{ display: display === false ? "none" : "block" }}>
      <Grid container justifyContent="center" style={{ marginTop: 20 }}>
        <div className="case3__form">
          <div style={{ backgroundColor: "#1a172e", padding: '20px' }}>
            <h3>Select files to upload</h3>
            <Typography variant="body2">
              Select a file name that contain only the following
              characters:upper case lowercase letter only english, numbers,
              spaces,commas etc.
            </Typography>
          </div>

          <Grid
            container
            spacing={2}
            style={{ margin: "20px 0", color: "black" }}
          >
            <Grid item md={6}>
              <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Submission plan</Form.Label>
                <Form.Control type="file" size="sm" />
              </Form.Group>
            </Grid>
            <Grid item md={6}>
              <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Appendics</Form.Label>
                <Form.Control type="file" size="sm" />
              </Form.Group>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            style={{ margin: "20px 0", color: "black" }}
          >
            <Grid item md={6}>
              <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Exemption Application form signed by manicipitlity</Form.Label>
                <Form.Control type="file" size="sm" />
              </Form.Group>
            </Grid>
            <Grid item md={6}>
              <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Existing protected space health report signed by the application editor</Form.Label>
                <Form.Control type="file" size="sm" />
              </Form.Group>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            style={{ margin: "20px 0", color: "black" }}
          >
            <Grid item md={6}>
              <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Protected space images</Form.Label>
                <Form.Control type="file" size="sm" />
              </Form.Group>
            </Grid>
            <Grid item md={6}>
              <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Confirm of recipt of a bank gurentee</Form.Label>
                <Form.Control type="file" size="sm" />
              </Form.Group>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            style={{ margin: "20px 0", color: "black" }}
          >
            <Grid item sm={12} md={6}>
              <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Additional files (permission)</Form.Label>
                <Form.Control type="file" size="sm" />
              </Form.Group>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Container>
  );
};
