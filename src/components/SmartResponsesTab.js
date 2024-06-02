import React, { useState } from 'react';
import { Typography, Card, CardContent, List, ListItem, ListItemText, Button, TextField, Grid, Box } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars';

const SmartResponsesTab = () => {
  const [selectedQuery, setSelectedQuery] = useState('');
  const [response, setResponse] = useState('');

  // Sample queries with subject and description, replace with your data
  const queries = [
    { id: 1, subject: 'Subject 1', description: 'Description of Query 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan justo ut hendrerit condimentum.' },
    { id: 2, subject: 'Subject 2', description: 'Description of Query 2. Integer feugiat blandit arcu, sit amet luctus dui finibus non. Nulla facilisi. Sed ac velit vel neque vehicula lacinia.' },
    { id: 3, subject: 'Subject 3', description: 'Description of Query 3. Sed sit amet mauris ex. Duis nec pharetra dolor. Donec ut ipsum ut libero feugiat efficitur.' },
    { id: 1, subject: 'Subject 1', description: 'Description of Query 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan justo ut hendrerit condimentum.' },
    { id: 2, subject: 'Subject 2', description: 'Description of Query 2. Integer feugiat blandit arcu, sit amet luctus dui finibus non. Nulla facilisi. Sed ac velit vel neque vehicula lacinia.' },
    { id: 3, subject: 'Subject 3', description: 'Description of Query 3. Sed sit amet mauris ex. Duis nec pharetra dolor. Donec ut ipsum ut libero feugiat efficitur.' },
    // Add more queries as needed
  ];

  const handleQuerySelect = (query) => {
    setSelectedQuery(query);
    // Fetch corresponding response based on the selected query and set it in the response state
    // For now, setting a dummy response
    setResponse(`Response to ${query.subject}`);
  };

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleRespondBack = () => {
    // Logic to handle responding back with the updated response
    console.log('Responding back:', response);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Smart Responses
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        This feature provides AI-powered responses to common queries.
      </Typography>
      <Card sx={{ marginTop: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            AI Features
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan justo ut hendrerit condimentum.
          </Typography>
        </CardContent>
      </Card>
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={4}>
          <Typography variant="h6" gutterBottom>
            Queries
          </Typography>
          <Box sx={{ height: 400 }}>
            <Scrollbars>
              <List>
                {queries.map((query) => (
                  <ListItem button key={query.id} onClick={() => handleQuerySelect(query)}>
                    <ListItemText primary={query.subject} secondary={query.description} />
                  </ListItem>
                ))}
              </List>
            </Scrollbars>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" gutterBottom>
            Response
          </Typography>
          <TextField
            multiline
            fullWidth
            rows={6}
            value={response}
            onChange={handleResponseChange}
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" onClick={handleRespondBack}>
            Respond Back
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SmartResponsesTab;
