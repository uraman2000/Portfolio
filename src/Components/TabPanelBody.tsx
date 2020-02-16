import React from "react";
import { Typography } from "@material-ui/core";

interface props {
  position: string;
  date: string;
  responsibility: any;
}
export default function TabPanelBody({ position, date, responsibility }: props) {
  return (
    <div>
      <Typography variant="subtitle2" gutterBottom>
        {position}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {date}
      </Typography>

      <Typography variant="body2" gutterBottom>
        <ul>
          {responsibility.map((item: any, key: any) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </Typography>
    </div>
  );
}
