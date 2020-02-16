import React from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Container,
  List,
  ListItemText,
  ListItem,
  Paper,
  CardMedia,
  LinearProgress
} from "@material-ui/core";
import { lighten, makeStyles, createStyles, Theme, withStyles } from "@material-ui/core/styles";
import profile from "../assets/profile.png";
import ProgresiveBar from "./ProgresiveBar";
import Title from "./Title";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      paddingTop: 0,
      paddingBottom: 0
    }
  })
);
const webSkills = [
  {
    label: "HTML/CSS",
    value: 90
  },
  {
    label: "Javascript",
    value: 90
  },
  {
    label: "React",
    value: 90
  },
  {
    label: "Node.js",
    value: 80
  },
  {
    label: "Express.js",
    value: 70
  },
  {
    label: "TypeORM",
    value: 80
  }
];

const androidSkills = [
  {
    label: "Kotlin",
    value: 90
  },
  {
    label: "Java",
    value: 90
  },
  {
    label: "Retrofit",
    value: 85
  },
  {
    label: "RxJava",
    value: 75
  },
  {
    label: "Glide / Picasso",
    value: 85
  }
];

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Container>
      <Title lable={"About Me"} />
      <Paper>
        <Container>
          <Grid container spacing={2} direction="row" justify="space-around" alignItems="stretch">
            <Grid item md={6} spacing={3} container direction="column" justify="center">
              <Grid item>
                <CardMedia
                  style={{ height: 250, marginLeft: "auto", backgroundSize: "contain" }}
                  image={profile}
                />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" gutterBottom>
                  Hello! I'm Pol, a software engineer based in Philippines who enjoys building and solving things.
                  I develop exceptional websites and android apps that provide intuitive, pixel-perfect user
                  interfaces with efficient and modern backends. Shortly after graduating from AMA University, I
                  worked as an Android Developer in Makati where I work on a stock trading app called COL
                  Financial, but I found my passion and interest in web development.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={6} container direction="column" justify="space-evenly" alignItems="stretch">
              <Typography variant="h6">Web Skills</Typography>
              {webSkills.map((item: any, key: any) => {
                return (
                  <Grid item>
                    <ProgresiveBar key={key} value={item.value} label={item.label} />
                  </Grid>
                );
              })}
              <Typography variant="h6">Android Skills</Typography>
              {androidSkills.map((item: any, key: any) => {
                return (
                  <Grid item>
                    <ProgresiveBar key={key} value={item.value} label={item.label} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
