import React, { useState } from "react";
import { Container, Paper, Box } from "@material-ui/core";
import Title from "./Title";
import VerticalTab from "./VerticalTab";

const experienceData = [
  {
    header: " Profesional Experience",
    companies: [
      {
        name: "Radiowealth Finance Company",
        position: "Website Developer",
        date: "Jul 2019 – Current",
        responsibility: ["Develop Financial Website For the company"]
      },
      {
        name: "Tektos Ecosystems Limited",
        position: "Android Developer",
        date: "Aug 2018 – Nov 2018",
        responsibility: ["Created a custom UI view components for the app", "Improving and developing app"]
      },
      {
        name: "Infotouch",
        position: "Android Developer",
        date: "Feb 2018 – Aug 2018",
        responsibility: ["creating a stock marketing app for the client of the company"]
      }
    ]
  },
  {
    header: "Personal Experience",
    companies: [
      {
        name: "Thesis – “Basic Skill Set For Kids” ",
        position: "Unity 2d Game",
        date: "May – June 2017",
        responsibility: [
          "This app helps kids to develop their problem solving skills, memory skills creativity skills, etc."
        ]
      },
      {
        name: "Thesis – “Kto12 Grading System” And “Learning app for kids”",
        position: "Android Developer",
        date: "November 2016 – March 2017",
        responsibility: [
          "Developed an Automatic Grading System that calculate the grades automatically like Spread Sheets",
          "The Learning app for kids helps kids to describe and pronounce words, letters, animals, flags, and numbers. It also helps kids to learn to spell the animals."
        ]
      },
      {
        name: "Markvile Subdivision",
        position: "Windows App",
        date: "August – October  2016	",
        responsibility: ["Developed a subdivision’s billing system"]
      },
      {
        name: "Thesis – “BSU Document Tracker” And “Batangas Public  Market Locator",
        position: "Android and php",
        date: "August – October  2015	",
        responsibility: [
          "Developed a Document tracker that tracks all document from other offices and lets the student view where the document is, using Android app",
          "The Batangas Public market helps people to locate/Search a specific store from the Android app."
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <Container>
      <Title lable={"Experience"} />
      {experienceData.map((item: any, key: any) => (
        <Box mt={2}>
          <Paper>
            <VerticalTab data={experienceData[key]} />
          </Paper>
        </Box>
      ))}
      {/* <Paper>
        <VerticalTab data={experienceData[0]} />
      </Paper> */}
    </Container>
  );
}
