import React from 'react'
import { Box, Button, TextField } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { EmojiEmotions, InsertEmoticon } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{p:1 ,display:'flex'}}>
        <Box sx={{display:'flex', alignItems:'center'}}>
            <Button sx={{minWidth:'auto'}}>
                <MoreVertIcon/>
            </Button>
            <Button sx={{minWidth:'auto'}}>
                <InsertEmoticon/>
            </Button>
        </Box>
        <Box sx={{display:'flex', flex:1}}>
            <TextField placeholder='Type Your message here' size='small' 
            sx={{"& .MuiInputBase-root" :
            {
                borderRadius:0,
                borderRight:0,
            },
            }}
            fullWidth
            />
            <Button variant='outlined' sx={{minWidth:'auto', height:'100%', borderRadius:0}}>Send</Button>
        </Box>
    </Box>
  )
}

export default Footer