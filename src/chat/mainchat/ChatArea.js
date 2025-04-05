import React from 'react'
import { Avatar, Box, Chip, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
const ChatArea = () => {
  return (
    <Box sx={{height:'100%',  flex:'1 0 0', background:'#f9f9f9', overflowY:'auto'}}>
        <Stack direction="row" sx={{justifyContent:'center'}}>
          <Chip label="Today" />
        </Stack>

      <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Haider Ali"
              secondary={
                <Typography  variant="caption" sx={{ color: 'text.primary'}}>
                  Ali Connors
                </Typography>
              }
            />
        </ListItem>
    </Box>
  )
}

export default ChatArea