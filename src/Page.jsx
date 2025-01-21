import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  Container,
  Box,
  Switch,
} from "@mui/material";
import siteBackground from "./assets/siteBackground.jpg";
import { createTheme } from "@mui/material/styles";
import FormControlLabel from '@mui/material/FormControlLabel';
import AppMenu from "./AppMenu";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Page() {
  // state to manage the dark mode
  // const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // // function to toggle the dark mode as true or false
  // const toggleDarkTheme = () => {
  //   setToggleDarkMode(!toggleDarkMode);
  // };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      // mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: "#000",
      },
      secondary: {
        main: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <Box
          sx={{
          // {/* <FormControlLabel control={<Switch checked={toggleDarkMode} onChange={toggleDarkTheme}/>} label="Lights"/> */}
          // Use the background image
          width: "100vw",
          minHeight: "100vh",
          backgroundImage: `url(${siteBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          
          }}
          >
      <Container
        sx={{
          pb: 5,
          pt: 10,
        }}
      >
        <CssBaseline />
        <AppMenu />
        <Outlet />
    </Container>
    </Box>
  </ThemeProvider>
  );
}
