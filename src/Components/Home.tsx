import React from "react";
import { Typography, Grid, Paper, Container, Box, CardMedia, Divider, Link, Button } from "@material-ui/core";
import profile from "../assets/profile.png";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailRoundedIcon from "@material-ui/icons/Email";
const data = [
  {
    label: "AGE",
    value: 22
  },
  {
    label: "ADDRESS",
    value: "Cambridge village Cainta Rizal,PH"
  },
  {
    label: "E-Mail",
    value: "uraman2000@gmail.com"
  },
  {
    label: "Phone",
    value: "+63 947 471 5155"
  }
];

const items = [
  {
    icon: <GitHubIcon style={{ color: "white" }} />,
    name: "gitub",
    link: "https://github.com/uraman2000"
  },
  {
    icon: <LinkedInIcon style={{ color: "white" }} />,
    name: "linkedin",
    link: "https://www.linkedin.com/in/pol-maynard-imbing-122a6315a/"
  },
  {
    icon: <EmailRoundedIcon style={{ color: "white" }} />,
    name: "email",
    link: "mailto:uraman2000@gmail.com"
  }
];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    socialContainer: {
      backgroundColor: theme.palette.primary.main,
      height: 69
    }
  })
);

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3}>
        <Container>
          <Box pt={2}>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item md={6} xs={12}>
                <CardMedia
                  style={{ height: 300, marginLeft: "auto", backgroundSize: "contain" }}
                  image={profile}
                />
              </Grid>

              <Grid item md={6} xs={12} container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom>
                    I'm
                    <b> Pol Maynard Imbing</b>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Website And Android Developer
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>

                {data.map((item: any, key: any) => (
                  <>
                    <Grid item xs={4}>
                      <Typography variant="subtitle2" gutterBottom>
                        {item.label}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        {item.value}
                      </Typography>
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Grid
          className={classes.socialContainer}
          spacing={0}
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {items.map((item: any, key: any) => (
            <Grid item>
              <Link href={item.link} color="inherit" target="_blank">
                {item.icon}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Box mt={2} textAlign="center" justifyContent="center">
        <Button variant="outlined" color="inherit" size="large">
          Resume
        </Button>
      </Box>
    </>
  );
}
