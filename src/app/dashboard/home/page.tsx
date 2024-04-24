"use client";

import BottomNavigation from "@/Components/Shared/NavigationBars/BottomNavigationBar";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import React, { useEffect, useState } from "react";
import Services from "@/app/components/Home/Services";
import SwiperCore from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import CommonServices from "@/app/components/Home/CommonServices";
import { ServiceType } from "@/types/service";

SwiperCore.use([Autoplay]);

const data:ServiceType[] = [
  {
      title:"Refer",
      route: "/refer",
      image:"https://cdn-icons-png.flaticon.com/128/3774/3774905.png",
  },
  {
      title:"Commission",
      route: "/commission",
      image:"https://cdn-icons-png.flaticon.com/512/10496/10496522.png"
  },
  {
      title:"Job",
      route: "/job",
      image:"https://static.vecteezy.com/system/resources/thumbnails/004/968/602/small/new-email-notification-on-mobile-phone-device-or-smartphone-concept-illustration-flat-design-eps10-vector.jpg"
  },
  {
      title:"Profile",
      route: "/profile",
      image:"https://cdn3d.iconscout.com/3d/premium/thumb/profile-6073860-4996977.png"
  },
]
const data2:ServiceType[] = [
  {
      title:"Complain",
      route: "/complain",
      image:"https://cdn-icons-png.flaticon.com/128/3774/3774905.png"
  },
  {
      title:"CHistory",
      route: "/cHistory",
      image:"https://cdn-icons-png.flaticon.com/512/1802/1802636.png"
  }, 
  {
      title:"DHistory",
      route: "/dHistory",
      image:"https://cdn-icons-png.flaticon.com/512/5180/5180799.png"
  }, 
]

export default function DashboardHome() {
  const [showBalance, setShowMoney] = useState(false);

  const handleTap = () => {
    setShowMoney(!showBalance);
  };
  useEffect(() => {
    if (showBalance) {
      setTimeout(() => {
        setShowMoney(false);
      }, 4000);
    }
  }, [showBalance]);
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <BottomNavigation />
      <Paper sx={{ bgcolor: "#d0392c", p: 1, py: 2 }} elevation={0}>
        <Grid container>
          <Grid xs={1} lg={2}></Grid>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            gap={5}
            xs={11}
            lg={8}
          >
            <div style={{ marginTop: "20px" }}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 50, height: 50 }}
              />
            </div>
            <div>
              <Typography
                sx={{ color: "white", fontWeight: 600, fontSize: 16, ml: 4 }}
              >
                Tanjin
              </Typography>
              <Box
                style={{
                  position: "relative",
                  borderRadius: "50px",
                  overflow: "hidden",
                  backgroundColor: "#f0f0f0",
                  padding: "6px",
                  paddingLeft: "40px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "200px", // Set width to 200px always
                }}
                onClick={handleTap}
              >
                <div
                  style={{
                    position: "absolute",
                    transition: "right 1s ease",
                    right: showBalance ? 70 : 200,
                    fontSize: "24px",
                    borderRadius: 50,
                    backgroundColor: "#cf0091",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    color: "whitesmoke",
                  }}
                >
                  &#2547;
                </div>
                <Typography
                  variant="h6"
                  style={{
                    marginLeft: "24px",
                    transition: "margin-left 0.3s ease",
                    color: "#cf0091",
                  }}
                >
                  {showBalance ? "100 BDT" : "Tap for balance"}
                </Typography>
              </Box>
            </div>
          </Grid>
          <Grid xs={0} lg={2}></Grid>
        </Grid>
      </Paper>
      <Services />

      <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 1000 }}
      loop={true}
    >
      <SwiperSlide>
        <img src="https://ustearn.com/assets/uploads/logo/banner.gif" style={{width:"100%"}} alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://ustearn.com/assets/uploads/logo/banner.gif" style={{width:"100%"}} alt="Image 2" />
      </SwiperSlide>
    </Swiper>

    <CommonServices  data={data} loopXs={4}  />
      <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 1000 }}
      loop={true}
    >
      <SwiperSlide>
        <img src="https://ustearn.com/assets/uploads/logo/banner.gif" style={{width:"100%"}} alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://ustearn.com/assets/uploads/logo/banner.gif" style={{width:"100%"}} alt="Image 2" />
      </SwiperSlide>
    </Swiper>
    
    <CommonServices  data={data2} loopXs={4}  />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </div>
  );
}
