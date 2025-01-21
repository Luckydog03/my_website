import React from "react";
import { Card, Typography } from "@mui/material";

export default function Projects() {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        {" "}
        Personal Website
      </Typography>

      <Typography>
      My first hosted website, created entirely by myself, is a large 
      ongoing project of mine. This portfolio website is a project I 
      plan to continually revisit, update, and expand for years to come. 
      It was built using ReactJS, HTML, and CSS. The framework of the 
      site was created with Vite, and the design is based on Material UI. 
      I modeled the website after a project I completed in a course called 
      Object-Oriented Design, where we designed a website that allowed users 
      to sign up and play chess. Although this site doesn’t incorporate a 
      game, I saw it as a great way to solidify the knowledge I gained from 
      one of my most impactful courses.
      </Typography>

    
      <Typography variant="h5" gutterBottom>
        RPG Video Game
      </Typography>

      <Typography>
      This project has recently expanded to include creating a simple RPG 
      pixel video game. A friend and I have begun planning and designing a 
      game project that we intend to complete. Currently, there's no set 
      deadline for when we want the project to be finished, but it is a project 
      we plan to work on and update frequently until completion.
      </Typography>
    </Card>
  );
}
