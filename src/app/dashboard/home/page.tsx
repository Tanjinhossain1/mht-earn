
"use client"

import BottomNavigation from '@/Components/Shared/NavigationBars/BottomNavigationBar'
import { Grid, Paper } from '@mui/material'
import React from 'react'

export default function DashboardHome() {
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
         <BottomNavigation />
         <Paper sx={{bgcolor:"#d0392c"}} elevation={0}>
        <Grid container>
            <Grid xs={0} lg={2}>

            </Grid>
            <Grid xs={12} lg={8}>

            </Grid>
            <Grid xs={0} lg={2}>

            </Grid>
        </Grid>
         </Paper>
    </div>
  )
}
