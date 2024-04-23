"use client"
// BottomNavigation.js
import React from 'react';
// import { useTheme } from '@mui/material';
// import { useMediaQuery, BottomNavigation as MuiBottomNavigation, BottomNavigationAction } from '@mui/material';

import MuiBottomNavigation  from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { useMediaQuery, useTheme } from '@material-ui/core';
import { Home as HomeIcon, Favorite as FavoriteIcon, Search as SearchIcon } from '@mui/icons-material';

const BottomNavigation = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MuiBottomNavigation  showLabels style={{ bottom: 0, top: isSmallScreen ? 'auto' : 0 ,position:isSmallScreen ? 'fixed' : 'sticky',width:"100%"}}>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    </MuiBottomNavigation>
  );
};

export default BottomNavigation;
