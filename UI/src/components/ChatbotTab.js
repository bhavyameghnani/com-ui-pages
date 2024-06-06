import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Paper, IconButton, Avatar, CircularProgress } from '@mui/material';
import axios from 'axios';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PersonIcon from '@mui/icons-material/Person';
import BotIcon from '@mui/icons-material/SmartToy';

const ChatbotTab = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! How can I assist you today?',
      liked: null,
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSend = async () => {
    if (query.trim() === '') return;
  
    setLoading(true);
  
    try {
      const userMessage = {
        sender: 'user',
        text: query,
        liked: null,
      };
  
      // Add user message to state
      setMessages([...messages, userMessage]);
      
      // Send user query to server
      const response = await axios.post('http://localhost:5000/api/chat', { query });
  
      // Add bot response to state
      const botMessage = {
        sender: 'bot',
        text: response.data.reply,
        liked: null,
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
    } finally {
      setLoading(false);
      setQuery(''); // Clear query input
    }
  };

  const handleFeedback = async (index, feedbackType) => {
    const message = messages[index];
    const newMessages = [...messages];
    newMessages[index].liked = feedbackType === 'like';
    setMessages(newMessages);

    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/feedback', {
        feedback_type: feedbackType,
        message: message.text,
      });
    } catch (error) {
      console.error('Error sending feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Chatbot
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Ask me anything about compliance and policies. I'm here to help!
      </Typography>
      <Paper sx={{ padding: 2, height: '60vh', overflowY: 'auto', backgroundColor: '#f0f0f0' }}>
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
              mb: 2,
            }}
          >
            {message.sender === 'bot' && <Avatar sx={{ bgcolor: '#002C56', mr: 1 }}><BotIcon /></Avatar>}
            <Paper
              sx={{
                padding: 1,
                maxWidth: '60%',
                backgroundColor: message.sender === 'user' ? '#002C56' : '#FFFFFF',
                color: message.sender === 'user' ? '#FFFFFF' : '#000000',
                borderRadius: 2,
                position: 'relative',
              }}
            >
              <Typography variant="body2">{message.text}</Typography>
              {message.sender === 'bot' && (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                  <IconButton
                    size="small"
                    color={message.liked === true ? 'primary' : 'default'}
                    onClick={() => handleFeedback(index, 'like')}
                  >
                    <ThumbUpIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color={message.liked === false ? 'secondary' : 'default'}
                    onClick={() => handleFeedback(index, 'dislike')}
                  >
                    <ThumbDownIcon />
                  </IconButton>
                </Box>
              )}
            </Paper>
            {message.sender === 'user' && <Avatar sx={{ bgcolor: '#002C56', ml: 1 }}><PersonIcon /></Avatar>}
          </Box>
        ))}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <CircularProgress />
          </Box>
        )}
      </Paper>
      <Box sx={{ display: 'flex', marginTop: 2 }}>
        <TextField
          fullWidth
          label="Type your message..."
          variant="outlined"
          value={query}
          onChange={handleQueryChange}
          sx={{ marginRight: 2 }}
        />
        <Button variant="contained" onClick={handleSend} disabled={loading}>
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default ChatbotTab;
