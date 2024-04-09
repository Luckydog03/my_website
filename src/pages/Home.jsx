import React from "react";
import { Container, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <Container>
      <Grid container direction="column" justifyContent="space-between" alignItems="stretch" >
        
          <Button component={Link} to="/About" variant="contained" sx={{mb:2}}>
            About Me
          </Button>
        
          <Button component={Link} to="/Experience" variant="contained"sx={{mb:2}}>
            My Experience
          </Button>

          <Button component={Link} to="/Projects" variant="contained" sx={{mb:2}}>
            My Projects
          </Button>

      </Grid>
    </Container>
  );
}
