import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { BiBuildings } from "react-icons/bi";
import React, { useState } from "react";
import "../Styles/home/footer.css";
// BiBuildingHouse
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    padding: "40px",
    textAlign: "center",
    height: 140,
    flexDirection: "column",
  },
  footer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const buildingData = [
    {
      name: "Archer",
      email: "someone@gmail.com",
      phone: "8801982674720",
    },
    {
      name: "Steve Smith",
      email: "someone@gmail.com",
      phone: "8801982674720",
    },
    {
      name: "Eoin Morgan",
      email: "someone@gmail.com",
      phone: "8801982674720",
    },
    {
      name: "Archer",
      email: "someone@gmail.com",
      phone: "8801982674720",
    },
    {
      name: "Steve Smith",
      email: "someone@gmail.com",
      phone: "8801982674720",
    },
    {
      name: "Eoin Morgan",
      email: "someone@gmail.com",
      phone: "8801982674720",
    },
  ];

const Footer = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <footer className="footer">
      <Carousel breakPoints={breakPoints}>
        {buildingData.map((item) => (
          <Cardd name={item.name} style={{ textAlign: "center" }} />
        ))}
      </Carousel>
    </footer>
  );
};

const Cardd = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Card className={classes.root}>
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h5" component="h1">
            <BiBuildings value={{ className: "reactIcons" }} />
          </Typography>
          <hr style={{ width: "20%", margin: "10px auto" }} />
          <Typography variant="body2" component="p">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui
            id, ipsum nostrum aspernatur facilis? Expedita modi ullam
            voluptatibus quidem.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default Footer;
