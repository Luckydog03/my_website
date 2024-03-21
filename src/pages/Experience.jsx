import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from '@mui/material';
import Resume from "../assets/DonsereauxResume.jpg";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <Card>
      <Grid>
        <CardActionArea>
            <a href = {Resume} target = "DonsereauxResume.pdf">
              <CardMedia component="img" image={Resume} alt="Resume" />
            </a>
        </CardActionArea>
      </Grid>
    </Card>
  );
}
