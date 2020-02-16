import React from "react";
import { Grid, Box } from "@material-ui/core";
import TrackVisibility from "react-on-screen";
interface Props {
  component: any;
  justify: "center" | "flex-start";
  alignItems?: "center";
  id?: any;
}

export default function Section({ id, component: Comp, justify: just, alignItems }: Props) {
  return (
    <Grid
      id={id}
      container
      spacing={0}
      direction="column"
      alignItems={alignItems}
      justify={just}
      style={{
        minHeight: "100vh",
        // height: "50%",
        paddingBottom: 150
      }}
    >
      <Grid item>
        {/* <TrackVisibility offset={1000}>
          {(isVisible: any) => {
            console.log(isVisible.isVisible);
            return isVisible.isVisible && <Comp />;
          }}

        </TrackVisibility> */}
        <Comp />
      </Grid>
    </Grid>
    // <Box
    //   style={{
    //     minHeight: "100vh",
    //     height: "50%",
    //     paddingBottom: 150
    //   }}
    //   justifyContent="center"
    //   alignItems="center"
    // >
    //   <Comp />
    // </Box>
  );
}
