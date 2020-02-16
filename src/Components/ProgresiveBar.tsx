import React, { useLayoutEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 10,
      paddingBottom: 10
    },
    container: {
      backgroundColor: "grey",
      height: 30,
      borderRadius: 20
    },
    progress: {
      backgroundColor: theme.palette.primary.main,

      height: 30,
      borderRadius: 20
    },
    text: {
      width: 110,
      height: 27,
      //   width: 30,
      textAlign: "center",

      paddingTop: 3,
      backgroundColor: theme.palette.secondary.main,
      color: "white"
    },
    textValue: {
      paddingTop: 3,
      paddingRight: 20,
      float: "right",
      color: "white"
    }
  })
);

interface props {
  value: number;
  label: string;
}
export default function ProgresiveBar({ value, label }: props) {
  const classes = useStyles();
  const [state, setstate] = useState(0);

  useLayoutEffect(() => {
    const frame = () => {
      if (state >= value) {
        clearInterval(id);
      } else {
        setstate(prev => prev + 1);
      }
    };
    var id = setInterval(frame, 1);
    return () => {
      clearTimeout(id);
    };
  }, [state]);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.textValue}>
          <b>{`${state}%`}</b>
        </div>
        <div className={classes.progress} style={{ width: `${state}%` }}>
          <div className={classes.text}>
            <b>{label}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
