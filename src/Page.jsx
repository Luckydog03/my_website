import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  Container,
  Box,
  Switch,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import FormControlLabel from '@mui/material/FormControlLabel';
import AppMenu from "./AppMenu";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Page() {
  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: "#3c18f0",
      },
      secondary: {
        main: "#b6b3f5",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
       <CssBaseline />
      <Container
        sx={{
          bgcolor:
            darkTheme.palette.mode === "dark"
              ? darkTheme.palette.background.default
              : darkTheme.palette.secondary,
          pb: 5,
          pt: 10,
          width: "100vw", // Viewport width
          minHeight: "100vh", // Viewport height
          maxWidth: "100vw", // Override maxWidth
        }}
      >
        <AppMenu />
        <Box>
          <FormControlLabel control={<Switch checked={toggleDarkMode} onChange={toggleDarkTheme}/>} label="Lights"/>
        </Box>
        <Outlet/>
      </Container>
    // </ThemeProvider>
  );
}
