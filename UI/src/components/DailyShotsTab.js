import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Grid,
  Container,
  Box,
  Chip,
} from "@mui/material";

const DailyShotsTab = () => {
  const [newsUrl, setNewsUrl] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: "Sample News 1",
      description:
        "Description of Sample News 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://blog.ipleaders.in/wp-content/uploads/2020/07/compliance-for-financial-service-provider.jpg",
      tags: ["Technology", "Business"],
    },
    {
      id: 2,
      title: "Sample News 2",
      description:
        "Description of Sample News 2. Fusce accumsan justo ut hendrerit condimentum.",
      imageUrl:
        "https://blog.ipleaders.in/wp-content/uploads/2020/07/compliance-for-financial-service-provider.jpg",
      tags: ["Politics", "Finance"],
    },
  ]);

  const handleNewsUrlChange = (event) => {
    setNewsUrl(event.target.value);
  };

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleAddNews = () => {
    if (newsUrl.trim() !== "") {
      const newId = newsList.length + 1;
      const newNews = {
        id: newId,
        title: `Sample News ${newId}`,
        description: `Description of Sample News ${newId}`,
        imageUrl:
          "https://blog.ipleaders.in/wp-content/uploads/2020/07/compliance-for-financial-service-provider.jpg",
        tags: tags,
      };
      setNewsList([...newsList, newNews]);
      setNewsUrl("");
      setTags([]);
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
            - Real-time updates <br />- Keyword-based tagging system
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ marginTop: 4, display: "flex", alignItems: "center" }}>
        <TextField
          fullWidth
          label="Enter News URL"
          variant="outlined"
          value={newsUrl}
          onChange={handleNewsUrlChange}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Enter Tag"
          variant="outlined"
          value={tagInput}
          onChange={handleTagInputChange}
          sx={{ marginRight: 2 }}
        />
      </Box>
      <Box sx={{ marginTop: 2 }}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onDelete={() => handleDeleteTag(tag)}
            sx={{ margin: 0.5 }}
          />
        ))}
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" onClick={handleAddNews}>
          Add News
        </Button>
      </Box>
      <Grid container spacing={3} sx={{ marginTop: 4 }}>
        {newsList.map((news) => (
          <Grid item xs={12} sm={6} md={4} key={news.id}>
            <Card sx={{ height: "100%" }}>
              <img
                src={news.imageUrl}
                alt={news.title}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {news.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {news.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ marginTop: 1 }}
                >
                  Tags: {news.tags.join(", ")}
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Button variant="outlined" sx={{ marginRight: 1 }}>
                    Read more
                  </Button>
                  <Button variant="outlined" sx={{ marginRight: 1 }}>
                    Share now
                  </Button>
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
