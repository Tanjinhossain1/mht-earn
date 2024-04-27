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
  // const isAvailablePack:boolean = false;
  const [isAvailablePack, setIsAvailablePack] = useState(true);
  const [isRegularPack, setIsRegularPack] = useState(true);
  const [isStandardPack, setIsStandardPack] = useState(true);
  const [isPremiumPack, setIsPremiumPack] = useState(true);
  const [isSuperPremium, setIsSuperPremium] = useState(true);

  const RegularPackAddQuantity = 10;
  const StandardPackAddQuantity = 20;
  const PremiumPackAddQuantity = 30;
  const SuperPremiumAddQuantity = 50;

  const isAvailablePackData = Array.from({ length: isAvailablePack ? 12 : 0 });
  const RegularPackData = Array.from({ length: RegularPackAddQuantity });
  const StandardPackData = Array.from({ length: StandardPackAddQuantity });
  const PremiumPackData = Array.from({ length: PremiumPackAddQuantity });
  const SuperPremiumPackData = Array.from({ length: SuperPremiumAddQuantity });

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
            {isAvailablePack === true ? (
              <AddCardComponent isNotAvailablePack handleOpen={handleOpen} isPack={isAvailablePack} packData={isAvailablePackData} />
            ) : (
              <>
                <Grid container>
                  <AddCardComponent title="Regular" handleOpen={handleOpen} isPack={isRegularPack} packData={RegularPackData} />
                  <AddCardComponent title="Standard" handleOpen={handleOpen} isPack={isStandardPack} packData={StandardPackData} />
                  <AddCardComponent title="Premium" handleOpen={handleOpen} isPack={isPremiumPack} packData={PremiumPackData} />
                  <AddCardComponent title="Super Premium" handleOpen={handleOpen} isPack={isSuperPremium} packData={SuperPremiumPackData} />
                   
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
        <Grid xs={1} xl={2}></Grid>
      </Grid>
      <WarningModal open={open} handleClose={handleClose} />
    </div>
  );
}

export const AddCardComponent = ({isPack,packData,handleOpen,isNotAvailablePack,title}:{isPack:boolean,packData:any,handleOpen?:()=>void,isNotAvailablePack?:boolean,title?:string}) => {
  return isPack ? (
    <>
      <Grid sx={{mt: isNotAvailablePack ? 0 : 5}} xs={12}>
        {
          isNotAvailablePack ? null :

        <Typography
        sx={{
          fontSize: 24,
          fontWeight: 600,
          textDecoration: "underline",
          mb: 2,
        }}
        >
          {title} Pack
        </Typography>
        }

      </Grid>
      <Grid sx={{ gap: 2 }} container xs={12}>
        {packData.map((data:any, index:number) => {
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
                    onClick={isNotAvailablePack ? handleOpen : ()=>console.log('show add')}
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
    </>
  ) : null;
};
