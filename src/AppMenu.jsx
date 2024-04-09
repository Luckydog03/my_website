import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        {" "}
        {/*position="static">*/}
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
            sx={{ mr: 2 }}
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

          <a href="https://github.com/Luckydog03/my_website" target="_blank" >
            <div>
              <GitHubIcon/>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/anthony-donsereaux-jr" target="_blank">
            <div>
              <LinkedInIcon/>
            </div>
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
