import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function About() {
  return (
    <Card>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <CardMedia component="img" image={""} alt="Picture of me" />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography sx={{ p: 1 }} variant="body1">
            This is a description about me that details how great I am. With a
            lot of extra words to help me visualize how this is supposed to
            look. I will talk about who I am, how I've come to be, what I've
            done and so on.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
