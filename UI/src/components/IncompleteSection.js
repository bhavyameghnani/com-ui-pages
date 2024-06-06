// src/components/IncompleteSection.js
import React, { useState } from "react";
import { Box, TextField, Typography, Button, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";

const IncompleteSection = ({ selectedUsers }) => {
  const [message, setMessage] = useState("");

  const handleButtonClick = (reminder) => {
    setMessage(reminder);
  };

  const handleEmailClick = () => {
    const emailAddresses = selectedUsers.map((user) => user.email).join(";");
    window.location.href = `mailto:${emailAddresses}?subject=Reminder&body=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h6" gutterBottom>
        Additional Information
      </Typography>
      <TextField
        fullWidth
        label="Provide more details"
        variant="outlined"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <Button
          variant="contained"
          onClick={() => handleButtonClick("First Reminder")}
        >
          First Reminder
        </Button>
        <Button
          variant="contained"
          onClick={() => handleButtonClick("Second Reminder")}
        >
          Second Reminder
        </Button>
        <Button
          variant="contained"
          onClick={() => handleButtonClick("Third Reminder")}
        >
          Third Reminder
        </Button>
      </Box>
      <Typography variant="body1" gutterBottom>
        For further assistance, contact us via email or chat:
      </Typography>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton onClick={handleEmailClick}>
            <EmailIcon fontSize="large" />
          </IconButton>
          <Typography>Email</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ChatIcon fontSize="large" />
          <Typography>Chat</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default IncompleteSection;
