// src/components/pages/Home.js
import React from "react";
import MainFeature from "../MainFeature";
import { Container, Grid } from "@mui/material";
import NavTabs from "../NavTabs";

const Home = () => {
  return (
    <div>
      <MainFeature />
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <NavTabs />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
