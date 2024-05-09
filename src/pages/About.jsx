import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import AnthonyPic from "../assets/AnthonyPic.jpg";

export default function About() {
  return (
    <Card>
      <Grid container spacing={1}>
        <Grid
          container
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          direction={"row"}
        >
          <Grid item xs={12} md={6}>
            <CardMedia component="img" image={AnthonyPic} alt="Picture of me" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography sx={{ p: 1 }}>
            I've always been big on community and friendship. My teachers would often 
            complain that I talked to everyone in class too much and needed to keep 
            to myself more. However, that never changed for me, and I still talk to 
            everyone—just maybe not too much. In fact, this subtle skill landed me a 
            shift lead position at the age of 16, after only being there for three 
            months. This skill also enabled me to become a manager at my second job. 
            At both jobs, the feedback was the same: I had a great understanding of others.
            </Typography>
            <Typography sx={{ p: 1 }}>
            I also believe that I am good at understanding others' social cues in a variety 
            of environments, which has allowed me to excel in multiple workplaces. From 
            customer service to managing a team, and even teaching future programmers Python, 
            it is a skill I take pride in because I love communicating with others, taking in 
            new perspectives, and debating our ideals. It pushes relationships further towards 
            a different understanding and helps a team become more effective.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography sx={{ p: 1 }}>
          As a computer science student, I've worked in countless teams and partnerships throughout 
          my academic career. Not all experiences have been positive. However, the ability of a 
          computer scientist to communicate is often overlooked. Each programming language requires 
          a different level of communication to convey the desired results. I am proficient in 
          various programming languages such as Java, Python, C, C++, ReactJS, HTML (with CSS), 
          and Assembly. Additionally, applying these languages across different IDEs and game engines 
          like VS Code, GitHub, and Unreal Engine 5 has enabled me to develop my communication skills 
          in a multitude of ways. Overall, communication is my most valued skill, and I believe it will 
          be my most cherished asset in the field of computer science.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
