import React, { useState } from 'react';
import { Typography, Card, CardContent, Button, TextField, Grid, Container, Box } from '@mui/material';

const DailyShotsTab = () => {
  const [newsUrl, setNewsUrl] = useState('');
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: 'Sample News 1',
      description: 'Description of Sample News 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/150',
      tags: ['Technology', 'Business'],
    },
    {
      id: 2,
      title: 'Sample News 2',
      description: 'Description of Sample News 2. Fusce accumsan justo ut hendrerit condimentum.',
      imageUrl: 'https://via.placeholder.com/150',
      tags: ['Politics', 'Finance'],
    },
  ]);

  const handleNewsUrlChange = (event) => {
    setNewsUrl(event.target.value);
  };

  const handleAddNews = () => {
    if (newsUrl.trim() !== '') {
      const newId = newsList.length + 1;
      const newNews = {
        id: newId,
        title: `Sample News ${newId}`,
        description: `Description of Sample News ${newId}`,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['New'],
      };
      setNewsList([...newsList, newNews]);
      setNewsUrl('');
    }
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Daily Shots
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Get the latest news and updates here!
      </Typography>
      <Card sx={{ marginTop: 4, padding: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Key AI Features
          </Typography>
          <Typography variant="body1">
            - AI-powered news aggregation <br />
            - Personalized news recommendations <br />
            - Real-time updates <br />
            - Keyword-based tagging system
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ marginTop: 4 }}>
        <TextField
          fullWidth
          label="Enter News URL"
          variant="outlined"
          value={newsUrl}
          onChange={handleNewsUrlChange}
          sx={{ marginRight: 2 }}
        />
        <Button variant="contained" onClick={handleAddNews}>
          Add
        </Button>
      </Box>
      <Grid container spacing={3} sx={{ marginTop: 4 }}>
        {newsList.map((news) => (
          <Grid item xs={12} sm={6} md={4} key={news.id}>
            <Card sx={{ height: '100%' }}>
              <img src={news.imageUrl} alt={news.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {news.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {news.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" sx={{ marginTop: 1 }}>
                  Tags: {news.tags.join(', ')}
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Button variant="outlined" sx={{ marginRight: 1 }}>
                    Read more
                  </Button>
                  <Button variant="outlined" sx={{ marginRight: 1 }}>
                    Share now
                  </Button>
                  <Button variant="outlined">Vote</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DailyShotsTab;
