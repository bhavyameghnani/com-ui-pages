import React, { useState, useEffect } from 'react';
import { Container, Typography, Tabs, Tab, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Collapse, IconButton } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import axios from 'axios';

const AdminTab = () => {
  const [likedResponses, setLikedResponses] = useState([]);
  const [dislikedResponses, setDislikedResponses] = useState([]);
  const [chatDetails, setChatDetails] = useState([]);

  useEffect(() => {
    // Fetch liked responses
    axios.get('http://localhost:5000/api/feedback?type=like')
      .then(response => {
        setLikedResponses(response.data);
      })
      .catch(error => {
        console.error('Error fetching liked responses:', error);
      });

    // Fetch disliked responses
    axios.get('http://localhost:5000/api/feedback?type=dislike')
      .then(response => {
        setDislikedResponses(response.data);
      })
      .catch(error => {
        console.error('Error fetching disliked responses:', error);
      });

    // Fetch chat details
    axios.get('http://localhost:5000/api/chatdetail')
      .then(response => {
        setChatDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching chat details:', error);
      });
  }, []);

  const TabPanel = ({ children, value, index }) => {
    return (
      <Box role="tabpanel" hidden={value !== index} id={`admin-tabpanel-${index}`} aria-labelledby={`admin-tab-${index}`}>
        {value === index && (
          <Box>
            {children}
          </Box>
        )}
      </Box>
    );
  };

  const renderResponsesTable = (responses, type) => {
    return (
      <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{type === 'like' ? 'Liked Responses' : 'Disliked Responses'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {responses.map((response, index) => (
              <TableRow key={index}>
                <TableCell>{response.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderChatDetailsTable = () => {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Query</TableCell>
              <TableCell>Reply</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chatDetails.map((detail, index) => (
              <TableRow key={index}>
                <TableCell>{detail.query}</TableCell>
                <TableCell>{detail.reply}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin
      </Typography>
      <Box sx={{ width: '100%', marginTop: 2 }}>
        <Tabs variant="fullWidth">
          <Tab label="Liked Responses" id="admin-tab-0" aria-controls="admin-tabpanel-0" />
          <Tab label="Disliked Responses" id="admin-tab-1" aria-controls="admin-tabpanel-1" />
          <Tab label="Chat Details" id="admin-tab-2" aria-controls="admin-tabpanel-2" />
        </Tabs>
        <TabPanel value={0} index={0}>
          {renderResponsesTable(likedResponses, 'like')}
        </TabPanel>
        <TabPanel value={1} index={1}>
          {renderResponsesTable(dislikedResponses, 'dislike')}
        </TabPanel>
        <TabPanel value={2} index={2}>
          {renderChatDetailsTable()}
        </TabPanel>
      </Box>
    </Container>
  );
};

export default AdminTab;
