import { Container, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import "../Styles/createcase/caseform.css";
import { Form } from "react-bootstrap";

export const CaseForm2 = ({ display }) => {
  return (
    <Container style={{ display: display === false ? "none" : "block" }}>
      <Grid container justifyContent="center" style={{ marginTop: 20 }}>
        <div className="case__form">
          {/* <Grid container> */}

          <Grid item sm={12} md={4}>
            <Form.Label>User of Structure</Form.Label>
            <Form.Select style={{direction:"ltr"}} size="sm">
              <option>Type of structure</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Grid>

          <Grid container spacing={2}>
            <Grid item sm={12} md={4}>
              <Form.Label>Number of basement floor</Form.Label>
              <Form.Select style={{ direction: "ltr" }} size="sm">
                <option>Type of structure</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
            </Grid>
            <Grid item sm={12} md={4}>
              <Form.Label>Total floor(including basement)</Form.Label>
              <Form.Select style={{ direction: "ltr" }} size="sm">
                <option>Type of structure</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
            </Grid>
          </Grid>
          <Grid item sm={12} md={4}>
            <Form.Label>User of structure</Form.Label>
              <Form.Select style={{ direction: "ltr" }} size="sm">
                <option>Type of structure</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
          </Grid>
        </div>
      </Grid>
    </Container>
  );
};
