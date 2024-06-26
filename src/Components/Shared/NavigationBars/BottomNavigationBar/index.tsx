"use client"
// BottomNavigation.js
import React from 'react';
// import { useTheme } from '@mui/material';
// import { useMediaQuery, BottomNavigation as MuiBottomNavigation, BottomNavigationAction } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MuiBottomNavigation  from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { useMediaQuery, useTheme } from '@material-ui/core';
import { Home as HomeIcon, Favorite as FavoriteIcon, Search as SearchIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const BottomNavigation = () => {
  const history = useRouter()
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MuiBottomNavigation  showLabels style={{ bottom: 0, top: isSmallScreen ? 'auto' : 0 ,position:isSmallScreen ? 'fixed' : 'sticky',width:"100%",zIndex:100}}>
      <BottomNavigationAction onClick={()=>history.push('/dashboard/home')} label="Home" icon={<HomeIcon sx={{color:"#d0392c"}} />} />
      <BottomNavigationAction label="Transaction" icon={<SearchIcon sx={{color:"#d0392c"}}  />} />
      <BottomNavigationAction label="Support" icon={<FavoriteIcon sx={{color:"#d0392c"}}  />} />
      <BottomNavigationAction label="Profile" icon={<AccountCircleIcon sx={{color:"#d0392c"}}  />} />
    </MuiBottomNavigation>
  );
};

export default BottomNavigation;
