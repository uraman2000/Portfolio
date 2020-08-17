import React from "react";
import {
  Container,
  Paper,
  Card,
  CardContent,
  Typography,
  Grid,
  ButtonBase,
  CardActionArea,
  MenuItem,
  Link,
} from "@material-ui/core";

import Title from "./Title";
import { lighten, makeStyles, createStyles, Theme, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardAction: {
      display: "block",
      textAlign: "initial",
      width: "100%",
    },
  })
);

export default function Projects() {
  const classes = useStyles();

  const data = [
    {
      title: "Gold Bell Financial Service (Credit Officer)",
      description:
        "This Project is within the same repository with other one just a different build version. check my github to see.",
      builtWith: "React.js | Styled System | Styled Component | Axios",
      link: "https://goldbell-credit-office.netlify.app",
    },
    {
      title: "Gold Bell Financial Service (Borrowers)",
      description:
        "This Project is within the same repository with other one just a different build version. check my github to see.",
      builtWith: "React.js | Styled System | Styled Component | Axios",
      link: "https://goldbell-borrowers.netlify.app",
    },
    {
      title: "PDC Inventory",
      description:
        " A simple Post Dated Cheque Invetory where you can monitor the cheques and can generate reports for the cheques.",
      builtWith: "React.js | typeOrm | Axios | Material- UI",
      link: "",
    },
  ];

  return (
    <Container>
      <Title lable={"Some Things I've Built"} />

      <Grid container spacing={3}>
        {data.map((item: any, key: any) => (
          <Grid item md={4} key={key}>
            <Link href={item.link} color="inherit" target="_blank" underline="none">
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" component="p">
                      {item.description}
                    </Typography>
                    <br />
                    <Typography color="textSecondary" variant="body2">
                      {item.builtWith}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
