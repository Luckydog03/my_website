import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Resume from "../assets/DonsereauxResume.jpg";
import Resume2 from "../assets/DonsereauxResume.pdf";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Experience() {
  return (
    <Card>
      {" "}
      {/*sx={{ minHeight: 300, display: "flex", alignContent: "center" }}>*/}
      <Grid
        sx={{
          width: 4 / 5,
          display: "block",
          alignContent: "center",
          flex: "center",
          m: "auto",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Undergraduate Teaching Assistant
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Extra words to look at and understand the format of how this page will
          look after I apply flex and image size and random other things just to
          fill up the word count.Something cool is the discovery of new planets
          in outer space. Scientists use powerful telescopes to explore the
          universe and find these planets.
        </Typography>

        <Typography>
          Extra words to look at and understand the format of how this page will
          look after I apply flex and image size and random other things just to
          fill up the word count.Something cool is the discovery of new planets
          in outer space. Scientists use powerful telescopes to explore the
          universe and find these planets.Extra words to look at and understand
          the format of how this page will look after I apply flex and image
          size and random other things just to fill up the word count.Something
          cool is the discovery of new planets in outer space. Scientists use
          powerful telescopes to explore the universe and find these planets.
          They study the characteristics of these planets to understand more
          about our galaxy.
        </Typography>

        <Typography>
          Extra words to look at and understand the format of how this page will
          look after I apply flex and image size and random other things just to
          fill up the word count.Something cool is the discovery of new planets
          in outer space. Scientists use powerful telescopes to explore the
          universe and find these planets. They study the characteristics of
          these planets to understand more about our galaxy. This research helps
          us learn about the vastness of the universe and how different planets
          form. It is fascinating to think about the possibilities of life
          beyond our own planet.Extra words to look at and understand the format
          of how this page will look after I apply flex and image size and
          random other things just to fill up the word count.Something cool is
          the discovery of new planets in outer space. Scientists use powerful
          telescopes to explore the universe and find these planets. They study
          the characteristics of these planets to understand more about our
          galaxy. This research helps us learn about the vastness of the
          universe and how different planets form. It is fascinating to think
          about the possibilities of life beyond our own planet.Extra words to
          look at and understand the format of how this page will look after I
          apply flex and image size and random other things just to fill up the
          word count.Something cool is the discovery of new planets in outer
          space. Scientists use powerful telescopes to explore the universe and
          find these planets. They study the characteristics of these planets to
          understand more about our galaxy. This research helps us learn about
          the vastness of the universe and how different planets form. It is
          fascinating to think about the possibilities of life beyond our own
          planet.Extra words to look at and understand the format of how this
          page will look after I apply flex and image size and random other
          things just to fill up the word count.Something cool is the discovery
          of new planets in outer space. Scientists use powerful telescopes to
          explore the universe and find these planets. They study the
          characteristics of these planets to understand more about our galaxy.
          This research helps us learn about the vastness of the universe and
          how different planets form. It is fascinating to think about the
          possibilities of life beyond our own planet.
        </Typography>
        <Grid sx={{ width: 4 / 5 }}>
          <CardActionArea href={Resume2} target="DonsereauxResume.pdf">
            <CardMedia component="img" image={Resume} alt="Resume" />
          </CardActionArea>
        </Grid>
      </Grid>
    </Card>
  );
}
