import { Outlet } from "react-router-dom";
import React from "react";
import Container from "@mui/material/Container";
import { Box, Paper, Typography } from "@mui/material";
import AppMenu from "./AppMenu";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Page() {
  return (
    <Container>
      <AppMenu />
      {/* <Paper> */}
        {/* <Container sx={{ pb: 5 }}> */}
          <Box sx={{ pb: 5 }} />

          <Box sx={{ pb: 5 }} />
          <Outlet />
        {/* </Container> */}
      {/* </Paper> */}
    </Container>
  );
}
