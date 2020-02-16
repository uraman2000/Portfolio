import React from "react";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
import Experience from "./Components/Experience";
import { Grid, MuiThemeProvider } from "@material-ui/core";
import LeftSideLogos from "./Components/LeftSideLogos";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { lightGreen } from "@material-ui/core/colors";

const secondary = lightGreen[400];
const primary = lightGreen[800];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    }
  }
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />

      <Grid container>
        <Grid item md={1}>
          <LeftSideLogos />
        </Grid>
        <Grid item md={10}>
          <Section id="home" component={Home} justify={"center"} alignItems={"center"} />
          <Section id="about-me" component={AboutMe} justify={"center"} alignItems={"center"} />
          <Section id="experience" component={Experience} justify={"center"} />
          <Section id="projects" component={Projects} justify={"center"} />
        </Grid>

        <Grid item md={1}></Grid>
      </Grid>
      <Footer />
    </MuiThemeProvider>
  );
}
