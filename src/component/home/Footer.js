import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
      
    return (
        <footer className="footer">
            <Cardd name="SISVAS"/>
            <Cardd name="HOME SWEET HOME"/>
            <Cardd name="HOUSEFULL"/>
        </footer>
    )
}

const Cardd = (props) => {
    const classes = useStyles();
    
    return(
        <div className={classes.footer}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                    <BiBuildings value={{ className: 'reactIcons' }} />
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui id, ipsum nostrum aspernatur facilis? Expedita modi ullam voluptatibus quidem.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
        </div>
    )
}
export default Footer