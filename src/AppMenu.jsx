import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Menu, MenuItem, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";
import "./styles/AppMenu.css";

export default function AppMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: theme.palette.primary.main }}>
        {" "}
        <Toolbar>
          <IconButton
            id="basic-button"
            aria-controls={open ? "menu-burger" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="basic-button"
            sx={{
              mr: 2,
              display: {
                xs: "block", // show on extra-small screens (mobile)
                md: "none",  // hide on medium (desktop) and up
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-burger"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Typography>
              <Link to={"/About"}>
                <MenuItem onClick={handleClose}>About Me</MenuItem>
              </Link>
              <Link to={"/Projects"}>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
              </Link>
              <Link to={"/Experience"}>
                <MenuItem onClick={handleClose}>Experience</MenuItem>
              </Link>
            </Typography>
          </Menu>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Anthony Donsereaux Jr.
            </Link>
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",  // hide on extra-small screens (mobile)
                md: "flex",  // show on medium (desktop) and up
              },
            }}
          >
            <Button color="secondary" component={Link} to="/About" variant="text" size="large" sx={{mr: 2}}> About Me</Button>
            <Button color="secondary" component={Link} to="/Experience" variant="text" size="large" sx={{mr: 2}}> Experience</Button>
            <Button color="secondary" component={Link} to="/Projects" variant="text" size="large" sx={{mr: 2}}> Projects</Button>

            
          </Box>
          <IconButton color="secondary" component={Link} to="https://www.linkedin.com/in/anthony-donsereaux-jr" target="_blank" sx={{mr: 2}}>
            <LinkedInIcon />
          </IconButton>
          <IconButton color="secondary" component={Link} to="https://github.com/Luckydog03/my_website" target="_blank" sx={{mr: 2}}>
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
