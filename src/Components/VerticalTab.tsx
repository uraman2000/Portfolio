import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container, Grid, Paper, Divider } from "@material-ui/core";
import Title from "./Title";
import TabPanelBody from "./TabPanelBody";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

export default function VerticalTab(props: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box pt={2} pb={2}>
        <Typography variant="h6" gutterBottom>
          {props.data.header}
        </Typography>
        <Divider variant="inset" />
      </Box>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {props.data.companies.map((item: any, key: any) => (
            <Tab label={item.name} {...a11yProps(key)} />
          ))}
        </Tabs>

        {props.data.companies.map((item: any, key: any) => (
          <TabPanel value={value} index={key}>
            <TabPanelBody position={item.position} date={item.date} responsibility={item.responsibility} />
          </TabPanel>
        ))}
        {/* <TabPanel value={value} index={0}>
          <TabPanelBody
            position={"Website Developer"}
            date={"Jul 2019 – Current"}
            responsibility={["Develop Financial Website For the company"]}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabPanelBody
            position={"Android Developer"}
            date={"Aug 2018 – Nov 2018"}
            responsibility={["Created a custom UI view components for the app", "Improving and developing app"]}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabPanelBody
            position={"Android Developer"}
            date={"Feb 2018 – Aug 2018	"}
            responsibility={["creating a stock marketing app for the client of the company"]}
          />
        </TabPanel> */}
      </div>
    </Container>
  );
}
