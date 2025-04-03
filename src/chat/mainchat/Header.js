import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Button, Typography } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Header = () => {
  return (
    <Card sx={{borderRadius: 0}}>
      <CardHeader
        avatar={
        <>
            <Button sx={{minWidth:'auto' , mr:1}}>
                <ArrowBackIcon/>
            </Button>
          <Avatar>
            R
          </Avatar>
        </>
        }
        action={
        <>
          <IconButton>
            <VideoCallIcon/>
          </IconButton>
          <IconButton>
            <CallIcon/>
          </IconButton>
        </>
        }
        title="Haider"
        subheader={<Typography variant='caption'>Developer</Typography>}
      />
    </Card>
  )
}

export default Header