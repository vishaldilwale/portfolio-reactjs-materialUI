import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import MakeInCountry from '../assets/images/MakeInCountryImg.png';
import VKart from '../assets/images/VKartImg.png';
import Github from '../assets/images/GithubProfileImg.png';
import Portfolio from '../assets/images/Portfolio.png';
import Project from "./Project";

let Intro=()=>{
    return(
        <React.Fragment>
            <Grid container
                  justify="center" alignItems="center"
                  style={{marginTop:"40px",backgroundColor:"white"}}
                  mx={5} mt={3} mb={0} id="Projects">
                <Grid item >
            <Typography  variant="h4" color={"textSecondary"} gutterBottom>
                Projects
            </Typography>
                </Grid>
            </Grid>
                <Grid container  maxwidth="true" spacing={0}>
                    <Project
                    name={"Make In Country"}
                    img={MakeInCountry}
                    info={"Find apps origins, country, features. Search app , contact and demand app info"}
                    link={"https://makeincountry.herokuapp.com"}
                    tags={["Node","Express", "MongoDB","JWT","Authentication","Node Mailer","MDBootstrap","DotEnv","Heroku"]}
                    features={["Search apps","Filter apps by category, country, ratings, downloads","Contact and demand app","Get mail","request admin view"]}
                    grow={"500"}
                    />
                    <Project
                        name={"V-Kart"}
                        img={VKart}
                        info={"VKart provides shopping for men, women and kids clothing."}
                        link={"https://v-kart.herokuapp.com/"}
                        tags={["Redux","Redux-Thunk","Node","Express","MongoDB","Authentication","DotEnv","Redux-DevTools","Node Mailer","MDBootstrap"]}
                        features={["Add items to cart","order items","Stripe payments","Order receipt","Get order confirmed mail","user authentication"]}
                        grow={"600"}
                    />
                    <Project
                        name={"Git Profile App"}
                        img={Github}
                        info={"Github Profile Search App. Get user info, details, repositories,company and more."}
                        link={"https://gitprofileapp.netlify.app/"}
                        tags={["Github API","MDBootstrap"]}
                        features={["search users","get users repositories","get user personnel info","user social links","user company"]}
                        grow={"700"}
                    />
                    <Project
                        name={"Portfolio"}
                        img={Portfolio}
                        info={"Personal website. Hire, contact me."}
                        link={"https://vishaldilwale.netlify.com"}
                        tags={["Material UI","Netlify","React-Reveal","Night Mode","HTML","CSS","Javascript"]}
                        features={["view projects","contact me","get to know me","hire me","my status"]}
                        grow={"800"}
                    />
                </Grid>
            <Divider/>
        </React.Fragment>
    )
};
export default Intro;