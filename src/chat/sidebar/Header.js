import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <Card sx={{ bgcolor: "primary.light", color: "primary.contrastText", borderRadius: 0 }}>
      <CardHeader
        avatar={
          <Avatar>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" sx={{color: "primary.contrastText"}}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Haider"
        subheader={<Typography variant='caption'>Developer</Typography>}
      />
    </Card>
  );
};

export default Header;