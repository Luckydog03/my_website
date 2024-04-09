import React from "react";
import { Container, Button, Grid } from "@mui/material";
export default function Home() {
  return (
    <Container>
      <Grid container direction="column" justifyContent="space-between" alignItems="stretch" >
        <Button variant="contained" href="/About" sx={{mb:2}}>
          About Me
        </Button>
        <Button variant="contained" href="/Experience" sx={{mb:2}}>
          My Experience
        </Button>
        <Button variant="contained" href="/Projects" sx={{mb:2}}>
          My Projects
        </Button>
      </Grid>
    </Container>
  );
}
