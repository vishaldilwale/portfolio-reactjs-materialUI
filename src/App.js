import './App.css';
import React, { useState} from "react";
import LandingScreen from "./components/portfolio/LandingScreen";
import Intro from "./components/portfolio/Intro";
import Skills from "./components/portfolio/Skills";
import Contact from "./components/portfolio/Contact";
import About from "./components/portfolio/About";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import orange from "@material-ui/core/colors/orange";
import deepOrange from "@material-ui/core/colors/deepOrange";
import lightBlue from "@material-ui/core/colors/lightBlue";
import deepPurple from "@material-ui/core/colors/deepPurple";
import MenuBar from "./components/portfolio/MenuBar";
function App() {
    const [theme, setTheme] = useState(false);

    const palletType = theme ? "dark" : "light";
    // const mainPrimaryColor = theme ? "#829baf" : lightBlue[900];
    const mainPrimaryColor = theme ? orange[400] : lightBlue[900];
    const mainSecondaryColor = theme ? deepOrange[900] : deepPurple[500];
    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            }
        }
    });
  return (
      <ThemeProvider theme={darkTheme}>
          <div style={{position:"fixed",zIndex:"5",top:"10px",right:"10px"}}>
              {!theme? <Brightness4RoundedIcon color="action"
                  onClick={() => setTheme(!theme)}  style={{top:"50px",right:"50px",fontSize:"30px"}}/> :
                  <Brightness7RoundedIcon color="action"
                      onClick={() => setTheme(!theme)} style={{top:"50px",right:"50px",fontSize:"30px"}}/>}
           </div>
                <div className="App">
                    <MenuBar/>
                    <LandingScreen/>
                    <Intro/>
                    <About/>
                    <Skills/>
                    <Contact/>
                </div>
      </ThemeProvider>
  );
}

export default App;
