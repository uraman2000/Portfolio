import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailRoundedIcon from "@material-ui/icons/Email";
import { Theme, makeStyles, createStyles, Link, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ul: {
      listStyleType: "none"
    },
    sideContainer: {
      position: "fixed",
      bottom: "0"
    },
    listItem: {
      marginBottom: 20
    },
    divider: {
      float: "right",
      marginRight: "13px",
      height: "90px"
    }
  })
);

const items = [
  {
    icon: <GitHubIcon />,
    name: "gitub",
    link: "https://github.com/uraman2000"
  },
  {
    icon: <LinkedInIcon />,
    name: "linkedin",
    link: "https://www.linkedin.com/in/pol-maynard-imbing-122a6315a/"
  },
  {
    icon: <EmailRoundedIcon />,
    name: "email",
    link: "mailto:uraman2000@gmail.com"
  }
];

export default function LeftSideLogos() {
  const classes = useStyles();
  return (
    <div className={classes.sideContainer}>
      <ul className={classes.ul}>
        {items.map((item: any, key: any) => (
          <li className={classes.listItem}>
            <Link href={item.link} color="inherit" target="_blank">
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
      <Divider className={classes.divider} orientation="vertical" />
    </div>
  );
}
