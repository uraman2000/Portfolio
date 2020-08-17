import React, { useState } from "react";
import { Container, Paper, Box } from "@material-ui/core";
import Title from "./Title";
import VerticalTab from "./VerticalTab";

const experienceData = [
  {
    header: "Profesional Experience",
    companies: [
      {
        name: "Gold Bell Financial Service (Singapore)",
        position: "Front-end Web Developer",
        date: "Jul 2019 – Current",
        responsibility: [
          "	Develop Front-end application using React.js and Styled Component, Styled System for custom Design",
          "Worked with designer and Project Manager for deployment in the server.",
        ],
      },
      {
        name: "Radio Wealth Finance Company, Inc. (Philippines)",
        position: "Full stack Developer",
        date: "Jul 2019 – Current",
        responsibility: [
          "	Develop Rest API Using Node.Js, TypeOrm, MsSql, Mysql.",
          "	Develop Front-end applications using React.js and Material–UI.",
          "	Develop a PDC monitoring system to monitor all the pdc transactions of all branches of the company.",
          "	Develop api for Policy Portal using DotNet Entity Framework.",
        ],
      },
      {
        name: "Tektos Ecosystems Limited (Philippines)",
        position: "Android Developer",
        date: "Aug 2018 – Nov 2018",
        responsibility: ["Created a custom UI view components for the app", "Improving and developing app"],
      },
      {
        name: "Infotouch (Philippines)",
        position: "Android Developer",
        date: "Feb 2018 – Aug 2018",
        responsibility: [
          "	Work with API developer and App Designer to deliver a use friendly app Stock Marketing app for the company’s client.",
          "	By Using Retrofit and RxJava for Api Integration",
          "By Using Kotlin language",
        ],
      },
    ],
  },
  {
    header: "Personal Experience",
    companies: [
      {
        name: "Thesis – “Basic Skill Set For Kids” ",
        position: "Unity 2d Game",
        date: "May – June 2017",
        responsibility: [
          "This app helps kids to develop their problem solving skills, memory skills creativity skills, etc.",
        ],
      },
      {
        name: "Thesis – “Kto12 Grading System” And “Learning app for kids”",
        position: "Android Developer",
        date: "November 2016 – March 2017",
        responsibility: [
          "Developed an Automatic Grading System that calculate the grades automatically like Spread Sheets",
          "The Learning app for kids helps kids to describe and pronounce words, letters, animals, flags, and numbers. It also helps kids to learn to spell the animals.",
        ],
      },
      {
        name: "Markvile Subdivision",
        position: "Windows App",
        date: "August – October  2016	",
        responsibility: ["Developed a subdivision’s billing system"],
      },
      {
        name: "Thesis – “BSU Document Tracker” And “Batangas Public  Market Locator",
        position: "Android and php",
        date: "August – October  2015	",
        responsibility: [
          "Developed a Document tracker that tracks all document from other offices and lets the student view where the document is, using Android app",
          "The Batangas Public market helps people to locate/Search a specific store from the Android app.",
        ],
      },
    ],
  },
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
