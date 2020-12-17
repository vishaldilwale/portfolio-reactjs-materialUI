import React from 'react';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import homepage from './homepage.css'
import Avatar from '@material-ui/core/Avatar';
import {  deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import vishalHome from '../assets/images/vishalHome.jpeg';
import Grow from '@material-ui/core/Grow';
import Button from "@material-ui/core/Button";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));

let LandingScreen =()=>{
    const classes = useStyles();
return(
    <React.Fragment>

        <section className="sectionClass" id="Home">
            <div className="waveClass">
                <span className="spanClass"></span>
                <span className="spanClass"></span>
                <span className="spanClass"></span>
            </div>
            <div className="content">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                     style={{  height: '100vh' }}>
                    <div >
                        <Grow in={true} timeout={3000}  >
                                <Avatar alt="Vishal Img"
                                        style={{margin:"auto",marginTop:"5px",marginBottom:"5px",height:"200px",width:"200px"}}
                                        className={classes.purple} src={vishalHome} />
                        </Grow>
                    <Hidden xlUp xsDown>
                        <Typography  variant="h3" gutterBottom>
                            {["Vishal Dilwale"].map((letter)=>{
                                return(
                                    <div key={letter}>
                                        <Zoom cascade delay={1000} >
                                            {letter}
                                        </Zoom>
                                    </div>
                                )
                            })}
                            {/*VISHAL DILWALE*/}
                        </Typography>
                    </Hidden>
                    <Hidden smUp >
                        <Typography variant="h4" gutterBottom>
                            {["Vishal Dilwale"].map((letter)=>{
                                return(
                                    <div key={letter}>
                                        <Zoom cascade delay={1000} >
                                            {letter}
                                        </Zoom>
                                    </div>
                                )
                            })}
                        </Typography>
                    </Hidden>
                    <Typography variant="subtitle2" style={{textAlign:"center"}} gutterBottom>
                        <Fade delay={2000}>
                        Full Stack Developer
                        </Fade>
                    </Typography>
                    </div>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Fade cascade bottom delay={2500}>
                                <Button variant="outlined" href="#resumeSection" color="primary">
                                    Resume
                                </Button>
                                </Fade>
                            </Grid>
                            <Grid item>
                                <Fade cascade bottom delay={2500}>
                                <Button variant="contained" href="#Projects" color="primary">
                                    Projects
                                </Button>
                                </Fade>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </div>
        </section>
    </React.Fragment>
    )
};
export default LandingScreen