import React from "react";
import { Paper, Typography, Card } from "@mui/material";

export default function Projects() {
  return (
    <Card>
      <Paper sx={{mb: 2}}>
        <Typography variant="h5"gutterBottom> Personal Website</Typography>

        <Typography>My first hosted website created solely by myself is my a current 
          large project of mine. This portfolio website is a project I plan to come back to, 
          work on, update and add to for years to come. This site was made using Reactjs, 
          HTML, and CSS. The skeleton of the site was created with Vite and design of the site 
          is based with Material UI. I based the website on a project I did in a course called
          Object-Oriented Design where we designed a website where users can sign up and play chess.
          Although this site doesn't incorproate a game, I thought it as a great way to solidify my
          knowlegde gained from one of my most impactful courses.</Typography>
      </Paper>

      <Paper sx={{mb: 2}}>
        <Typography variant="h5"gutterBottom>RPG Video Game</Typography>

        <Typography>This project has recently begun to create a simple a simple RPG pixel video game. A 
          friend and I have begun planning and simple design of a game project that we wish to complete.
          there's no deadline on when we want the project to be done as of now, but it is a project we plan 
          to work on and update frequently until completion.
        </Typography>
      </Paper>
    </Card>
  );
}
