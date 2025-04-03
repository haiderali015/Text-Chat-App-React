import React from 'react';
import Header from './Header';
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { ChatBubbleOutline, Person } from '@mui/icons-material';

const Sidebar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "25vw" , display:"flex" , flexDirection:"column" , height:"100vh"}}>
      <Header />
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
        <Tab icon={<ChatBubbleOutline />} fontSize="small" iconPosition="start" sx={{minHeight:'inherit'}} label="chat List" />
        <Tab icon={<Person />} iconPosition="start" fontSize="medium" sx={{minHeight:'inherit'}} label="User List" />
      </Tabs>
      {value === 0 && (
        <List sx={{p:0 , overflow:'auto', flex:'1 0 0'}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Haider Ali"
              secondary={
                <Typography variant="caption" sx={{ color: 'text.primary'}}>
                  Ali Connors
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Haider Ali"
              secondary={
                <Typography variant="caption" sx={{ color: 'text.primary'}}>
                  Ali Connors
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Haider Ali"
              secondary={
                <Typography variant="caption" sx={{ color: 'text.primary'}}>
                  Ali Connors
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Haider Ali"
              secondary={
                <Typography variant="caption" sx={{ color: 'text.primary'}}>
                  Ali Connors
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Haider Ali"
              secondary={
                <Typography variant="caption" sx={{ color: 'text.primary'}}>
                  Ali Connors
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Haider Ali"
              secondary={
                <Typography variant="caption" sx={{ color: 'text.primary'}}>
                  Ali Connors
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Haider Ali"
              secondary={
                <Typography variant="caption" sx={{ color: 'text.primary'}}>
                  Ali Connors
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

        </List>
      )}
      {value === 1 && <div>1</div>}
    </Box>
  );
};

export default Sidebar;