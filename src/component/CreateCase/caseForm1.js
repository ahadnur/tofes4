import { Container, Grid, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
// import '../Styles/createcase/caseform.css'
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { IconButton } from "@mui/material";
import { Form } from "react-bootstrap";

export const CaseForm1 = () => {
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");

  const handleAccountBalanceIcon1 = (e) => {
    setState1(state1 === "white" ? "" : "white");
  };
  const handleAccountBalanceIcon2 = (e) => {
    setState2(state1 === "white" ? "" : "white");
  };
  const handleAccountBalanceIcon3 = (e) => {
    setState3(state1 === "white" ? "" : "white");
  };
  const handleAccountBalanceIcon4 = (e) => {
    setState4(state1 === "white" ? "" : "white");
  };
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        style={{ marginTop: 20, color: "black" }}
      >
        <div className="case__form">
          <Grid container>
            <Grid className="bug__type" item md={3}>
              <IconButton
                style={{ color: state1 }}
                onClick={handleAccountBalanceIcon1}
              >
                <AccountBalanceIcon />
              </IconButton>
              <h5>New contruction</h5>
            </Grid>
            <Grid className="bug__type" item md={3}>
              <IconButton
                style={{ color: state2 }}
                onClick={handleAccountBalanceIcon2}
              >
                <AccountBalanceIcon />
              </IconButton>
              <h5>Exemption</h5>
            </Grid>
            <Grid className="bug__type" item md={3}>
              <IconButton
                style={{ color: state3 }}
                onClick={handleAccountBalanceIcon3}
              >
                <AccountBalanceIcon />
              </IconButton>
              <h5>Form 4</h5>
            </Grid>
            <Grid className="bug__type" item md={3}>
              <IconButton
                style={{ color: state4 }}
                onClick={handleAccountBalanceIcon4}
              >
                <AccountBalanceIcon />
              </IconButton>
              <h5>Plan changes</h5>
            </Grid>
          </Grid>
          {/* <Grid container style={{ color: "black" }}></Grid> */}
          <Grid container spacing={2} style={{ color: "black" }}>
            <Grid item sm={12} md={6}>
              <Form.Label>Sattlement</Form.Label>
              <Form.Control type="text" />
            </Grid>
            <Grid item sm={12} md={6}>
              <Form.Label>Commitee</Form.Label>
              <Form.Select style={{ direction: "ltr" }} size="sm">
                <option>Type of structure</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Form.Label>Sattlement</Form.Label>
              <Form.Control type="text" />
            </Grid>
            <Grid item sm={12} md={6}>
              <Form.Label>Smooth</Form.Label>
              <Form.Control type="text" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Form.Label>Lot Number</Form.Label>
              <Form.Control type="text" />
            </Grid>
            <Grid item sm={12} md={6}>
              <Form.Label>Program Number</Form.Label>
              <Form.Control type="text" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Form.Label>Street</Form.Label>
              <Form.Control type="text" />
            </Grid>
            <Grid item sm={12} md={6}>
              <Form.Label>House Number</Form.Label>
              <Form.Control type="text" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Form.Label>A number of licence available</Form.Label>
              <Form.Control type="text" />
            </Grid>
            <Grid item sm={12} md={6}>
              <Form.Label>Application Name</Form.Label>
              <Form.Control type="text" />
            </Grid>
            <Grid item></Grid>
            <Grid container spacing={2}>
              <Grid item sm={12} md={6}>
                <Form.Label>Talephone Application</Form.Label>
                <Form.Control type="text" />
              </Grid>
              <Grid item sm={12} md={6}>
              <Form.Label>Skeleton plane phone</Form.Label>
              <Form.Control type="text" />
            </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={12} md={12}>
              <Form.Label>There the skeleton plan</Form.Label>
              <Form.Control type="text" />
            </Grid>
           
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={12} md={12}>
              <Typography variant="body2">There the skeleton plan</Typography>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                rows="4"
                cols="50"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid black",
                  outline: "none",
                  padding: "10px",
                  //   color: "white",
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Container>
  );
};
