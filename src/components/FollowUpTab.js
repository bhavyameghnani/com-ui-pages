// src/components/CSVUploader.js
import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Container, Grid } from "@mui/material";
import UserTabs from "./UserTabs";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const CSVUploader = () => {
  return (
    <div>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Upload CSV
        </Typography>
        <Button
          variant="contained"
          component="label"
          startIcon={<CloudUploadIcon />}
        >
          Upload File
          <input type="file" hidden />
        </Button>
      </Box>
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <UserTabs />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CSVUploader;
