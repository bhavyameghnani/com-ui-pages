// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#002C56" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <Box
            component="img"
            src=""
            alt="Nomura Logo"
            sx={{ marginRight: 2, width: "100px", height: "auto" }}
          />
          <Typography variant="h6" component="div" sx={{ color: "#FFFFFF" }}>
            Co-pilot
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button sx={{ color: "#FFFFFF" }} component={Link} to="/">
            Home
          </Button>
          <Button sx={{ color: "#FFFFFF" }} component={Link} to="/dashboard">
            Dashboard
          </Button>
          <Button sx={{ color: "#FFFFFF" }} component={Link} to="/services">
            Services
          </Button>
          <Button sx={{ color: "#FFFFFF" }} component={Link} to="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
