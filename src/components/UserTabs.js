// src/components/UserTabs.js
import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import IncompleteSection from './IncompleteSection';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const UserTabs = () => {
  const [value, setValue] = useState(0);
  const [completedUsers, setCompletedUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Completed' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Completed' },
  ]);
  const [incompleteUsers, setIncompleteUsers] = useState([
    { id: 1, name: 'Alice Brown', email: 'alice@example.com', status: 'Incomplete' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', status: 'Incomplete' },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDelete = (id, type) => {
    if (type === 'completed') {
      setCompletedUsers(completedUsers.filter(user => user.id !== id));
    } else {
      setIncompleteUsers(incompleteUsers.filter(user => user.id !== id));
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="user tabs">
        <Tab label="Completed Users" {...a11yProps(0)} />
        <Tab label="Incomplete Users" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {completedUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(user.id, 'completed')}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {incompleteUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(user.id, 'incomplete')}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <IncompleteSection selectedUsers={incompleteUsers} />
      </TabPanel>
    </Box>
  );
};

export default UserTabs;
