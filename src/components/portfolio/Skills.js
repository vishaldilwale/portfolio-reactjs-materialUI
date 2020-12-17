import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Bootstrap from "../assets/images/Bootstrap.png";
import ExpressJS from "../assets/images/Express.jpg";
import Javascript from "../assets/images/Javascript.png";
import MaterialUI from "../assets/images/MaterialUI.png";
import ReactJS from "../assets/images/ReactJS.png";
import NodeJS from "../assets/images/NodeJS.png";
import MDBootstrap from "../assets/images/MDBootstrap.png";
import MongoDB from "../assets/images/MongoDB.png";

let Skills=()=>{

    const SkillsArray=[
        {name:"React JS",logo:ReactJS},
        {name:"Node JS",logo:NodeJS},
        {name:"Mongo DB",logo:MongoDB},
        {name:"Material UI",logo:MaterialUI},
        {name:"Express JS",logo:ExpressJS},
        {name:"MDBootstrap",logo:MDBootstrap},
        {name:"Javascript",logo:Javascript},
        {name:"Bootstrap",logo:Bootstrap},
    ];
return(
    <React.Fragment>
        <Box >
        <Box style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <Typography variant="h4" style={{marginTop:"40px"}}>Skills</Typography>
        </Box>
        <Container mx={4}  style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"40px"}}>
            <Grid container  spacing={4} style={{alignItems:"center",justifyContent:"center"}}>
                {SkillsArray.map((skill,index)=>{
                    return(
                            <Grid key={skill + index} item xs={6} sm={4} md={3} lg={3} >
                                <Box style={{maxWidth:"200px"}}>
                                <Paper style={{borderRadius:30}}>
                                    <Box p={1}
                                         style={{display:"flex",width:"auto",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                                        <Box mr={1} borderRadius={50}>
                                            <img alt={skill} style={{borderRadius:"50%"}} src={skill.logo} height={50} width={50}/>
                                        </Box>
                                        <Typography component="h5">
                                            {skill.name}
                                        </Typography>
                                    </Box>
                                </Paper>
                                </Box>
                            </Grid>

                    )
                })}
            </Grid>
        </Container>
            <Divider style={{marginTop:"60px"}}/>
        </Box>
    </React.Fragment>
)
};
export default Skills;