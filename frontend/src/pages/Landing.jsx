import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import "../App.css";
import {
  AppBar, Toolbar, Typography, IconButton, Drawer,
  List, ListItem, ListItemText, Box, Button, Container, Grid
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Stats from "./Stats";
import Feature from "./Feature";
import Review from "./Review";
import Footer from "./Footer";

export default function Landing() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <div className="landingContainer">
      {/* Responsive Navbar */}
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1E90FF' }}>
            CONNECTLY
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit" onClick={() => handleNavigate("/aljk23")}>Join as Guest</Button>
            <Button color="inherit" onClick={() => handleNavigate("/auth")}>Register</Button>
            <Button variant="contained" onClick={() => handleNavigate("/auth")}>Login</Button>
          </Box>

          <IconButton sx={{ display: { xs: 'block', md: 'none' } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          <ListItem button onClick={() => handleNavigate("/aljk23")}> <ListItemText primary="Join as Guest" /> </ListItem>
          <ListItem button onClick={() => handleNavigate("/auth")}> <ListItemText primary="Register" /> </ListItem>
          <ListItem button onClick={() => handleNavigate("/auth")}> <ListItemText primary="Login" /> </ListItem>
        </List>
      </Drawer>

      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 700 }} gutterBottom>
              <span style={{ color: "#1E90FF" }}>
                <Typewriter words={['Bridge']} loop={false} typeSpeed={100} deleteSpeed={50} />
              </span>{' '}the Distance,
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 500, mb: 4 }}>
              Connect Instantly With <span style={{ color: "#1E90FF" }}>
                <Typewriter words={['Connectly!']} loop={false} typeSpeed={100} deleteSpeed={50} />
              </span>
            </Typography>
            <Button variant="contained" size="large" onClick={() => handleNavigate("/auth")}>Get Started <ChevronRightIcon /></Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <img src="/mobile.png" alt="Connectly App" style={{ width: "100%", maxHeight: 500 }} />
          </Grid>
        </Grid>
      </Container>
      <br></br>

      <Stats />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Feature />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Review />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
      <br></br>
      <Typography variant="body2" align="center">
        &copy; 2025 CONNECTLY. All rights reserved.
      </Typography>
    </div>
  );
}
