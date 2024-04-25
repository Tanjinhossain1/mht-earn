"use client";
import BottomNavigation from "@/Components/Shared/NavigationBars/BottomNavigationBar";
import WarningModal from "@/Components/Shared/WarningModal";
import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Work() {
  const RegularPackData = 10;
  const array = Array.from({ length: RegularPackData });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Grid xs={12} sx={{ borderBottom: "1px solid gray" }}>
        <BottomNavigation />
      </Grid>

      <Grid sx={{ my: 5 }} container>
        <Grid xs={1} xl={2}></Grid>
        <Grid xs={10} xl={8}>
          <Grid sx={{ gap: 2 }} xs={12} container>
            {array.map((data, index) => {
              return (
                <Grid xs={12} md={6} lg={3.8} key={index}>
                  <Paper
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 1,
                      gap: 2,
                      alignItems: "center",
                      py: 5,
                    }}
                  >
                    <Image
                      alt=""
                      width={30}
                      height={50}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDm0UHQCQhPHtw4D0r3Ey7gd6oRWqqq12k2V-S5kx_gnYk_O9W-fnEOQVbc1CMrJeFIAI&usqp=CAU"
                    />
                    <Typography>Advertisement</Typography>
                    <div className="container">
                      <Button
                        onClick={handleOpen}
                        sx={{ ml: 4 }}
                        size="small"
                        className="button"
                      >
                        Click Ad
                      </Button>
                    </div>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid xs={1} xl={2}></Grid>
      </Grid>
       <WarningModal open={open} handleClose={handleClose} />
    </div>
  );
}
