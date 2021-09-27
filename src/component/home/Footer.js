import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {BiBuildings} from 'react-icons/bi'

import '../Styles/home/footer.css'
// BiBuildingHouse

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      
    },
    media: {
      padding: "40px",
      textAlign: "center",
      height: 140,
      flexDirection: 'column',
    },
    footer: {
        display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    }
  });
const Footer = () => {
    const buildingData = [
        {
            name: "Archer",
            email: 'someone@gmail.com',
            phone: "8801982674720",
        },
        {
            name: "Steve Smith",
            email: 'someone@gmail.com',
            phone: "8801982674720",
        },
        {
            name: "Eoin Morgan",
            email: 'someone@gmail.com',
            phone: "8801982674720",
        },

    ]
      
    return (
        <footer className="footer">
            {
                buildingData.map((item) => 
                    <Cardd name={item.name} email={item.email} phone={item.phone} style={{textAlign: 'center'}}/>
                )
            }
        </footer>
    )
}

const Cardd = (props) => {
    const classes = useStyles();
    
    return(
        <div className={classes.footer}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardContent style={{textAlign: 'center'}}>
                <Typography  variant="h5" component="h1">
                    <BiBuildings value={{ className: 'reactIcons' }} />
                </Typography>
                <Typography  variant="body2" component="p">
                    {props.name}
                </Typography>
                <Typography  variant="body2" component="p">
                    {props.email}
                </Typography>
                <Typography  variant="body2" component="p">
                    {props.phone}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui id, ipsum nostrum aspernatur facilis? Expedita modi ullam voluptatibus quidem.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
    )
}
export default Footer