import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from "@material-ui/core/Divider";
import Resume from "./Resume";
import myResume from "../assets/resume/VishalDilwaleResume.pdf";


const useStyles = makeStyles((theme) => ({
    aboutContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    aboutButtons: {
        marginTop: theme.spacing(4),
    },
}));

export default function About() {
    const classes = useStyles();
    let [resume, setResume]=useState(false);
    return (
        <React.Fragment>
            <main id="Resume">
                <div className={classes.aboutContent} id="resumeSection">
                    <Container>
                        <Typography component="h5" variant="h4" align="center" color="textPrimary" gutterBottom>
                            Resume
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        </Typography>
                        <div className={classes.aboutButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" onClick={e=>setResume(!resume)} color="primary">
                                        See Resume
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" href={myResume} download color="primary">
                                        Download Resume
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                        {resume && <Resume/>}

                    </Container>
                </div>
                <Divider/>
            </main>
        </React.Fragment>
    );
}