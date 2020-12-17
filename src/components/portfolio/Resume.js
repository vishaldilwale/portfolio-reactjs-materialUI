import React from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import MakeInCountry from "../assets/images/MakeInCountryImg.png";
import VKart from "../assets/images/VKartImg.png";
import GitProfileApp from "../assets/images/GithubProfileImg.png";
import Portfolio from "../assets/images/Portfolio.png";
import DoneIcon from '@material-ui/icons/Done';
import Chip from "@material-ui/core/Chip";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import grey from "@material-ui/core/colors/grey";
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import LanguageIcon from '@material-ui/icons/Language';
import CakeIcon from '@material-ui/icons/Cake';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Divider from "@material-ui/core/Divider";
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    cardContent: {
        flexGrow: 1,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius:'20px',
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);"
    },
}));


export default function Resume (){
    const classes = useStyles();
    const theme = useTheme();
    const ProjectArray=[
        {image:MakeInCountry,name:"Make In Country", info:"MERN Stack Application",details:"Developed from scratch",link:"https://makeincountry.herokuapp.com"},
        {image:VKart,name:"V-Kart", info:"MERN Stack Application",details:"Developed from scratch",link:"https://v-kart.herokuapp.com/"},
        {image:GitProfileApp,name:"Git Profile App", info:"React Frontend Application",details:"Developed from scratch",link:"https://gitprofileapp.netlify.app/"},
        {image:Portfolio,name:"Portfolio", info:"React Frontend Application",details:"Developed from scratch",link:"https://vishaldilwale.netlify.com"},
    ];
    const SkillsList=[
        {name:"React JS",rating:"4.5"},
        {name:"Bootstrap",rating:"5"},
        {name:"Node JS",rating:"4.5"},
        {name:"Mongo DB",rating:"4.5"},
        {name:"Mongoose",rating:"5"},
        {name:"Express JS",rating:"4.5"},
        {name:"Redux",rating:"4.5"},
        {name:"Redux-Thunk",rating:"4.5"},
        {name:"HTML",rating:"5"},
        {name:"CSS",rating:"5"},
        {name:"Javascript",rating:"5"},
        {name:"MDBootstrap",rating:"5"},
        {name:"Material UI",rating:"4.5"},
        {name:"Node Mailer",rating:"5"},
        {name:"Email JS",rating:"5"},
        {name:"JWT",rating:"4.5"},

        ];
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    return(
        <React.Fragment>
            <Container className={classes.cardGrid} maxWidth="md">
                <Fade>
                <Grid container spacing={4}>
                    {/*------ ABOUT ----------*/}
                        <Grid item xs={12} sm={6} md={6}>
                            <Card>
                                <CardContent className={classes.cardContent}>
                                    <Typography component="h6" variant="h5" align="center" color="textPrimary" gutterBottom>
                                        <span style={{borderBottom:"2px solid blue",padding:"10px"}}>ABOUT</span>
                                    </Typography>
                                    <Typography variant="button" display="block" style={{textAlign:"center",marginTop:"40px"}} gutterBottom>Vishal Dwarkadas Dilwale</Typography>
                                    <Typography variant="body2" align="center" color="textSecondary" paragraph>
                                        React Lover and Full stack developer
                                    </Typography>
                                    <Grid
                                        style={{width: "auto",justifyContent: "center",alignItems:"center",display: "grid"}}
                                        container
                                        direction="column"
                                    >
                                    <Grid item style={{display:"flex",marginLeft:"30px", justifyContent:"flex-start",alignItems:"center"}}>
                                        <span><CastForEducationIcon style={{ color: grey[400] }}/></span>
                                        <ButtonGroup variant="text" size={"small"} style={{textAlign:"center",marginLeft:"20px"}} color="default" aria-label="text primary button group">
                                            <Button disabled style={{ color: grey[600],textTransform:"capitalize" }}>Graduate Engineer</Button>
                                        </ButtonGroup>
                                    </Grid>
                                    <Grid item style={{display:"flex",marginLeft:"30px", justifyContent:"flex-start",}}>
                                        <span><CakeIcon style={{ color: grey[400] }}/></span>
                                        <ButtonGroup variant="text" size={"small"} style={{textAlign:"center",marginLeft:"20px"}} color="default" aria-label="text primary button group">
                                            <Button disabled style={{ color: grey[600],textTransform:"capitalize" }}>06-09-1995</Button>
                                        </ButtonGroup>
                                    </Grid>
                                    <Grid item style={{display:"flex",marginLeft:"30px", justifyContent:"flex-start",}}>
                                        <span><HomeIcon style={{ color: grey[400] }}/></span>
                                        <ButtonGroup variant="text" size={"small"} style={{textAlign:"center",marginLeft:"20px"}} color="default" aria-label="text primary button group">
                                            <Button disabled style={{ color: grey[600],textTransform:"capitalize" }}>Aurangabad, Maharashtra</Button>
                                        </ButtonGroup>
                                    </Grid>
                                    <Grid item style={{display:"flex",marginLeft:"30px", justifyContent:"flex-start",}}>
                                        <span><RecordVoiceOverIcon style={{ color: grey[400] }}/></span>
                                        <ButtonGroup variant="text" size={"small"} style={{textAlign:"center",marginLeft:"20px"}} color="default" aria-label="text primary button group">
                                            <Button disabled style={{ color: grey[600],textTransform:"capitalize" }}>English</Button>
                                            <Button disabled style={{ color: grey[600],textTransform:"capitalize" }}>Hindi</Button>
                                            <Button disabled style={{ color: grey[600],textTransform:"capitalize" }}>Marathi</Button>
                                        </ButtonGroup>
                                    </Grid>
                                    <Grid item style={{display:"flex",marginLeft:"30px", justifyContent:"flex-start",alignItems:"center"}}>
                                        <span><LanguageIcon style={{ color: grey[400] }}/></span>
                                        <ButtonGroup variant="text" size={"small"} style={{textAlign:"center",marginLeft:"20px"}} color="default" aria-label="text primary button group">
                                            <Button href="https://www.vishaldilwale.netlify.com" style={{ color: grey[600],textTransform:"capitalize" }}>Website</Button>
                                        </ButtonGroup>
                                    </Grid>
                                        <Box mx={0} my={2}>
                                            <Grid
                                                container
                                               style={{display:"flex",justifyContent:"space-between"}}
                                            >
                                                <Grid item xs={3} md={3} lg={3}>
                                                    <Button href="http://www.instagram.com/vishal__dilwale" rel="noopener noreferrer" target="_blank">
                                                    <InstagramIcon style={{ fontSize: 30 }} color="disabled" />
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={3} md={3} lg={3}>
                                                    <Button href="https://www.linkedin.com/in/vishal-d-0b767711b" rel="noopener noreferrer" target="_blank">
                                                    <LinkedInIcon style={{ fontSize: 30 }} color="disabled"/>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={3} md={3} lg={3}>
                                                    <Button target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=vishaldilwale113314@gmail.com&amp;su=Hey%20I%20just%20saw%20your%20portfolio&amp;&body=I%20am%20impressed%20with%20your%20resume.&amp;ui=2&amp;tf=1&amp;pli=1">
                                                    <MailIcon style={{ fontSize: 30 }} color="disabled"/>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={3} md={3} lg={3}>
                                                    <Button href="http://wa.me/919518387602?text=Hi%20VISHAL%20DILWALE" rel="noopener noreferrer" title="WhatsApp" target="_blank">
                                                        <WhatsAppIcon style={{ fontSize: 30 }} color="disabled" size={""}/>
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    {/*-------- EXPERIENCE ----------*/}
                        <Grid item xs={12} sm={6} md={6}>
                            <Card >
                                <CardContent className={classes.cardContent}>
                                    <Typography component="h6" variant="h5" align="center" color="textPrimary" gutterBottom>
                                        <span style={{borderBottom:"2px solid blue",padding:"10px"}}>EXPERIENCE</span>
                                    </Typography>
                                    <Typography variant="button" display="block" style={{marginTop:"40px"}} component="h5" align="center">
                                        Ashyutas Software Solutions
                                    </Typography>
                                    <Typography variant="body2" align="center" color={"textSecondary"} gutterBottom>
                                        Hyderabad, India
                                    </Typography>
                                    <Typography variant="body2" align="center" color={"textSecondary"} gutterBottom>
                                        2019 - 2020
                                    </Typography>

                                    <div style={{textAlign:"center"}}>
                                        <Box mt={1}>
                                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                            MERN Stack Developer
                                        </Typography>
                                        </Box>
                                        <Box my={2}>
                                        <Typography variant="body2" color={"textSecondary"} gutterBottom>
                                            Worked on React JS, Node JS, MongoDB, Mongoose, Bootstrap.
                                            Developed apps from scratch.
                                            Worked on project planning, code structuring, front end development and backend development.
                                        </Typography>
                                        </Box>
                                    </div>
                                    <Box mt={5}>
                                    <div style={{display:"flex",flexWrap:"wrap"}}>
                                        <Chip variant="outlined" style={{margin:"2px"}} size="small" label="React JS" />
                                        <Chip variant="outlined" style={{margin:"2px"}} size="small" label="Node JS" />
                                        <Chip variant="outlined" style={{margin:"2px"}} size="small" label="Mongo DB" />
                                        <Chip variant="outlined" style={{margin:"2px"}} size="small" label="Mongoose" />
                                        <Chip variant="outlined" style={{margin:"2px"}} size="small" label="Express JS" />
                                        <Chip variant="outlined" style={{margin:"2px"}} size="small" label="Email Template" />
                                        <Chip variant="outlined" style={{margin:"2px"}} size="small" label="JWT" />
                                        <Chip variant="outlined" style={{margin:"2px"}} size="small" label="Github" />
                                        <Chip variant="outlined" style={{margin:"2px"}} size="small" label="Webstorm" />
                                        <Chip variant="outlined" style={{margin:"2px"}} size="small" label="VS Code" />
                                    </div>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    {/*------- SKILLS -------*/}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card >
                                <CardContent className={classes.cardContent}>
                                    <Typography component="h6" variant="h5" align="center" color="textPrimary" gutterBottom>
                                        <span style={{borderBottom:"2px solid blue",padding:"10px"}}>SKILLS</span>
                                    </Typography>
                                    <div style={{marginTop:"40px",marginBottom:"12px"}}>
                                    {SkillsList.map((skill)=>{
                                        return(
                                                <div key={skill.name +"1"} style={{display:"block",textAlign:"center",marginTop:"5px"}}>
                                                <Chip
                                                    size="small"
                                                    variant="outlined"
                                                    style={{ width:"80%",margin:"auto",border:"none"}}
                                                    // color="primary"
                                                    label={skill.name}
                                                    deleteIcon={<DoneIcon />}
                                                />
                                                </div>
                                        )
                                    })}
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    {/*------ PROJECTS -------*/}
                        <Grid item xs={12} sm={12} md={8}>
                            <Card >
                                <CardContent className={classes.cardContent}>
                                    <Typography component="h6"  variant="h5" align="center" color="textPrimary" gutterBottom>
                                        <span style={{borderBottom:"2px solid blue",padding:"10px"}}>PROJECTS</span>
                                    </Typography>
                                    <div style={{marginTop:"30px"}}>
                                    {ProjectArray.map((project)=>{
                                        return(
                                                <Grid key={project.name} className={classes.root}>
                                                    <Paper className={classes.paper} style={{padding:"10px",boxShadow:"none"}}>
                                                        <Grid
                                                            container
                                                            direction="row"
                                                            justify="space-around"
                                                            alignItems="center"
                                                            style={{margin:"5px"}}
                                                        >
                                                            <Grid item xs={12} sm={4} md={4}>
                                                                <CardMedia component={"span"} >
                                                                    <img className={classes.img} alt="complex" src={project.image} />
                                                                </CardMedia>
                                                            </Grid>
                                                            <Grid style={{margin:"5px"}} item  xs={12} sm={4} md={4}>
                                                                <Typography gutterBottom variant="subtitle1">
                                                                    {project.name}
                                                                </Typography>
                                                                <Typography variant="body2" gutterBottom>
                                                                    {project.info}
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary">
                                                                    {project.details}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item style={ isMobile ? {textAlign:"center",display:"flex",justifyContent:"space-around"}: {textAlign:"center",display:"block"}} xs={12} sm={1} md={2}>
                                                                <Box mt={1}>
                                                                <Button variant="contained" href={"#" + project.name }  size={"small"} color="primary">
                                                                     More
                                                                </Button>
                                                                </Box>
                                                                <Box mt={1}>
                                                                <Button variant="outlined" size={"small"}
                                                                        target="_blank" rel="noreferrer" href={project.link}
                                                                        color="primary">
                                                                    Visit
                                                                </Button>
                                                            </Box>
                                                            </Grid>

                                                        </Grid>
                                                    </Paper>
                                                    {isMobile && project.name !== "Portfolio" && <Divider variant="middle" />}

                                                </Grid>
                                        )
                                    })}
                                    </div>

                                </CardContent>
                            </Card>
                        </Grid>
                </Grid>
                </Fade>
            </Container>
        </React.Fragment>
    )
}
