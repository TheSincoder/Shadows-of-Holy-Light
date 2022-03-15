import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom';
import {AppContext} from '../context/AppContext';
import Sound from '../components/GameMusic';

export default function ButtonAppBar() {
  const {user} = useContext(AppContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src='https://i.ibb.co/LnTB3gL/logo-no-stars1-removebg-preview.png' alt='logo' height='50px' display='flex' />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Sound/> 
          {user?.token?
    <IconButton
      size="large"
      aria-label="show more"
      aria-haspopup="true"
     color="primary"
    >
      <Link to='/logout' style={{color: 'inherit', textDecoration:"none"}}>
    <LogoutIcon/>
        </Link>
    </IconButton>
        :
    <IconButton
      size="large"
      aria-label="show more"
      aria-haspopup="true"              
      color="inherit"
    >
      <Link to='/login' style={{color: 'inherit', textDecoration:"none"}}>                 
    <LoginIcon/>
        </Link>
    </IconButton>
}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
