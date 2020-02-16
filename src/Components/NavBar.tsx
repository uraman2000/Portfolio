import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import { Link, Button, CardMedia } from "@material-ui/core";
import logo from "../assets/pol-logo.png";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const links = [
  {
    label: "Home",
    link: "#home"
  },
  {
    label: "About Me",
    link: "#about-me"
  },
  {
    label: "Experience",
    link: "#experience"
  },
  {
    label: "Work",
    link: "#projects"
  }
];
export default function NavBar(props: Props) {
  return (
    <>
      {/* <CssBaseline /> */}
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" style={{ flex: 1 }}>
              <Button href={""}>
                <CardMedia style={{ height: 50, width: 50, backgroundSize: "contain" }} image={logo} />
              </Button>
            </Typography>
            {links.map((item: any, key: any) => (
              <Button key={key} href={item.link} color="inherit">
                {item.label}
              </Button>
            ))}

            <Button variant="outlined" color="inherit">
              Resume
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
