import {
  Container,
  Grid,
  Paper,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { CaseForm1 } from "./caseForm1";
import { CaseForm2 } from "./caseForm2";
import { CaseForm3 } from "./caseForm3";
import "../Styles/createcase/caseform.css";
import { Banner } from "../common/banner";
import DashNav from "../common/DashNav";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import EditRoadIcon from '@mui/icons-material/EditRoad';

const steps = ["Detail of case", "Detail of building", "Documents"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CaseForm1 />;
    case 1:
      return <CaseForm2 />;
    case 2:
      return <CaseForm3 />;
    default:
      throw new Error("Unknown step");
  }
}



const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 0,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
    
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
  theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor:"#1a172e",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor:"#1a172e",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1:<EditRoadIcon/>,
    2: <MailOutlineOutlinedIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};






export const CaseForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <>
      <DashNav />
      <Banner />
      <Container>
        <div style={{marginTop:"20px" }}>
          <Stack sx={{ width: "100%" }} spacing={4}>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </div>

        <form>
          {getStepContent(activeStep)}
          <Container>
            <Grid container justifyContent="center">
              <div className="case__form">
                {activeStep == 0 ? (
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#ffc478" }}
                    onClick={handleNext}
                  >
                    Continue
                  </Button>
                ) : (
                  ""
                )}

                {activeStep == steps.length - 2 ? (
                  <>
                    <Button
                      variant="contained"
                      onClick={handleBack}
                      style={{
                        marginLeft: 20,
                        backgroundColor: "#ffc478",
                      }}
                    >
                      Return
                    </Button>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#ffc478" }}
                      onClick={handleNext}
                    >
                      Continue
                    </Button>{" "}
                  </>
                ) : (
                  ""
                )}

                {activeStep === steps.length - 1 ? (
                  <>
                    <Button
                      variant="contained"
                      style={{
                        marginTop: 20,
                        marginLeft: 20,
                        backgroundColor: "#ffc478",
                      }}
                    >
                      Add File
                    </Button>
                    <div style={{ float: "left" }}>
                      <Button
                        variant="contained"
                        onClick={handleBack}
                        style={{
                          marginTop: 20,
                          marginLeft: 20,
                          backgroundColor: "#ffc478",
                        }}
                      >
                        Return
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          marginTop: 20,
                          marginLeft: 20,
                          backgroundColor: "#ffc478",
                          border: "none",
                        }}
                      >
                        Open a new file
                      </Button>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </Grid>
          </Container>
        </form>
      </Container>
    </>
  );
};
