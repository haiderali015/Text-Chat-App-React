import React from 'react'
import { Paper } from '@mui/material';
import Sidebar from './sidebar';
import Chatbox from './mainchat';
import Profile from './profile'

const Chat = () => {
  return (
    <Paper square elevation={0} sx={{height:"100vh", display:'flex'}}>
        <Sidebar/>
        <Chatbox/>
        <Profile/>
    </Paper>
  )
}

export default Chat;