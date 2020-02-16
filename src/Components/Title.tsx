import React from "react";
import { Box, Typography, Divider } from "@material-ui/core";

interface props {
  lable: string;
}
export default function Title({ lable }: props) {
  return (
    <div>
      <Box textAlign="center" m={1} fontWeight="fontWeightBold">
        <Typography variant="h3" gutterBottom>
          {lable}
        </Typography>
        <Divider variant="middle" />
      </Box>
      <br />
    </div>
  );
}
