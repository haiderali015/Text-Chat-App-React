import React from 'react'
import { Avatar, Box, Chip, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteIcon from '@mui/icons-material/Delete';

const ChatArea = () => {
  return (
    <Box sx={{height:'100%',  flex:'1 0 0', background:'#f9f9f9', overflowY:'auto'}}>
        <Stack direction="row" sx={{justifyContent:'center', py:2, position:'sticky', top:0 ,zIndex:2 ,background:'f9f9f9'}}>
          <Chip label="Today" />
        </Stack>
      <List sx={{p:0, overflowY:"auto", flex:"1 0 0"}}>
        <ListItem alignItems="flex-start" sx={{mb:2}}>
          <Box sx={{display:'flex', width:"80%"}}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{width: '100%', p:1.5}}>
              <ListItemText sx={{m:0, color:'black'}} primary="Zainab"
              secondary={
                <Typography  variant="caption" sx={{ color: 'text.primary'}}>
                  hello kaise ho ?
                </Typography>
              }
            />
            </Paper>
          </Box>  
        </ListItem>
        
        <ListItem alignItems="flex-start" sx={{flexDirection:'row-reverse', mb:2}}>
          <Box sx={{display:'flex', width:"80%", flexDirection:'row-reverse'}}>
            <ListItemAvatar sx={{display:'flex', flexDirection:'row-reverse'}}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{width: '100%', p:1.5, bgcolor:'#ccc', color:'primary.contrastText'}}>
              <ListItemText sx={{m:0, color:'black'}} primary="Haider Ali"
              secondary={
                <Typography  variant="caption" sx={{ color: 'text.primary'}}>
                  men thek ap sunao
                </Typography>
              }
            />
            <Box sx={{mt:1, color:'black', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <Typography variant='body2'>12:30 PM</Typography>
                <Box>
                  <IconButton size='small'>
                    <ReplyIcon fontSize='small'/>
                  </IconButton>
                  <IconButton size='small' color='error'>
                    <DeleteIcon fontSize='small'/>
                  </IconButton>
                </Box>
            </Box>
            </Paper>
          </Box>  
        </ListItem>
      </List>
    </Box>
  )
}

export default ChatArea