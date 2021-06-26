import React from "react";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import InputAdornment from '@material-ui/core/InputAdornment';
import DoneIcon from '@material-ui/icons/Done';
import Fade from 'react-reveal/Fade';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    expand: {
        transform: 'rotate(0deg)',
        margin: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

let Project=(props)=>{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return(
        <React.Fragment>
                <Grid item xs={12} m={2} sm={6} lg={3} md={4}  style={{backgroundColor:"white"}}>
                        <Fade cascade>
                        <Box p={5}  id={props.name}>
                            <Card style={{minHeight: "442px"}} id="project">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={props.name}
                                        height="180"
                                        width="70"
                                        image={props.img}
                                        title={props.name}
                                        style={props.name === "V-Kart" ? {filter: "drop-shadow(2px 1px 6px black)",objectFit:"stretch"} : {objectFit:"stretch"}}
                                    />
                                    <CardContent>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="space-between"
                                            alignItems="center"
                                        >
                                            <Typography gutterBottom variant="h6" component="h2">
                                                {props.name}
                                            </Typography>
                                            <Button size="small" target="_blank" rel="noreferrer" href={props.link}
                                                    color="primary">
                                                Visit
                                            </Button>
                                        </Grid>
                                        <Typography style={{marginBottom: "10px"}} variant="subtitle2"
                                                    color="textSecondary" component="p">
                                            {props.info}
                                        </Typography>
                                        {props.tags?.map((tag) => {
                                            return (
                                                <Chip label={tag}
                                                      key={tag}
                                                      style={{
                                                          marginRight: "2px",
                                                          marginTop: "5px",
                                                          fontSize: "smaller"
                                                      }}
                                                      variant="outlined"
                                                      color="default"
                                                      size="small"
                                                />
                                            )
                                        })}

                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{padding: "0px", margin: "0px"}}>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    ><ExpandMoreIcon/>
                                    </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography variant="overline" display="block" gutterBottom>
                                            Features:
                                        </Typography>
                                        <div className={classes.root}>
                                            {props.features?.map((feature) => {
                                                return (
                                                    <Box key={feature} style={{display: "flex", alignItems: "center"}}
                                                         role={undefined} button="true">
                                                        <InputAdornment position="start">
                                                            <DoneIcon color={"primary"} fontSize={"small"}/>
                                                        </InputAdornment>
                                                        <Typography style={{marginLeft: "5px"}} variant="body2"
                                                                    gutterBottom>
                                                            {feature}
                                                        </Typography>
                                                    </Box>
                                                );
                                            })}
                                        </div>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Box>
                        </Fade>
                </Grid>
        </React.Fragment>
    )
};
export default Project;