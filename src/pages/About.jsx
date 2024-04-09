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
              I've always been big on community and friendship. My teachers
              would always complain that I talked to everyone in class too much
              and I needed to keep to myself more. However, that never changed
              for me and I still do talk to everyone, just maybe not too much.
              In fact this subtle skill landed my a shift lead position at the
              age of 16 when I had only been there for three months. This skill
              later allowed me to become a manager at my second job as well.
              Both jobs said the same thing, I had a great understanding of
              others.
            </Typography>
            <Typography sx={{ p: 1 }}>
              I also believe that I am good at understanding others social cues
              in a variety of environment which has allowed me to excel in
              multiple workplaces. From customer service, to managing a team,
              and even teaching future programmer python. It is a skill I take
              pride in because I love communicating with others, taking in new
              perspectives and debating over our ideals. It allows the
              relationship to be pushed further to a different understanding and
              helps a team become more affective.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography sx={{ p: 1 }}>
            As a computer science student I've worked in countless teams and
            partnership throughout my school career. Not all have been good
            either. However, the ability for a computer scientist to communicate
            is always over looked. Each language takes a different level of
            communication to convey the desired results. Even from the various
            programming languages I know such as Java, Python, C, C++, React /
            js, HTML (CSS), and Assembly. Also applying these languages with
            different IDEs and Game engines like VS code, Github and Unreal
            Engine 5 has allowed me to develop my communication in a multitude
            of ways. Overall, communication is my most valued skill, and I
            believe that it will be my most cherished within the field of
            computer science.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
