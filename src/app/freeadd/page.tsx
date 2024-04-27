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
import { AddCardComponent } from "../work/page";

export default function FreeAdd() {
    
  const [isAvailablePack, setIsAvailablePack] = useState(true);

  const isAvailablePackData = Array.from({ length: isAvailablePack ? 12 : 0 });
  return (
    <div>
      <Grid xs={12} sx={{ borderBottom: "1px solid gray" }}>
        <BottomNavigation />
      </Grid>

      <Grid sx={{ my: 5 }} container>
        <Grid xs={1} xl={2}></Grid>
        <Grid xs={10} xl={8}>
          <Grid sx={{ gap: 2 }} xs={12} container>
             
              <AddCardComponent title="Free Add"  isPack={isAvailablePack} packData={isAvailablePackData} />
            
          </Grid>
        </Grid>
        <Grid xs={1} xl={2}></Grid>
      </Grid> 
    </div>
  );
}