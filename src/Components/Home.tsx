import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default function Home() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Hi, my name is
      </Typography>
      <Typography variant="h2" gutterBottom>
        Pol Maynard Imbing
      </Typography>
      <Grid item md={5}>
        <Typography variant="subtitle1" gutterBottom>
          I'm a software engineer based in Philippines specializing in websites and Android applications.
        </Typography>
      </Grid>
    </>
  );
}
