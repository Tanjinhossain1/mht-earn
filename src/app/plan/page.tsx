"use client";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import StarsIcon from "@mui/icons-material/Stars";

const planData = [
  {
    title: "Regular Pack",
    price: 200,
    dailyAd: 10,
    dailyIncome: 20,
    star: false,
    doubleStar: false,
  },
  {
    title: "Standard pack",
    price: 500,
    dailyAd: 20,
    dailyIncome: 40,
    star: false,
    doubleStar: false,
  },
  {
    title: "Premium pack",
    price: 1000,
    dailyAd: 30,
    dailyIncome: 60,
    star: true,
    doubleStar: false,
  },
  {
    title: "Super Premium",
    price: 2000,
    dailyAd: 50,
    dailyIncome: 80,
    star: true,
    doubleStar: true,
  },
];
const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
            ogay
          </Paper>
)
export default function Plan() {
  const history = useRouter();

  return (
    <Grid container>
      <Grid xs={12}>
        <Paper sx={{ p: 1, bgcolor: "#e60067" }} elevation={2}>
          <Typography
            sx={{
              fontSize: 27,
              fontWeight: 600,
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
            onClick={() => history.back()}
          >
            <KeyboardDoubleArrowLeftIcon sx={{ fontSize: 40 }} /> Plan
          </Typography>
        </Paper>
      </Grid>

      <Grid sx={{ mt: 4, mb: 6 }} xs={12}>
        <Grid
          alignItems={"center"}
          display={"flex"}
          justifyContent={"center"}
          gap={5}
          container
        >
          {planData.map((plan, index) => {
            return (
              <Grid xs={12} sm={6} lg={4} xl={3} key={index}>
                <Card
                  sx={{
                    maxWidth: 300,
                    margin: "auto",
                    boxShadow: 3,
                    border: "1px solid #e60067",
                    p: 0.3,
                  }}
                >
                  <CardContent sx={{ border: "1px solid #e60067" }}>
                    <Typography
                      sx={{
                        borderBottom: "1px solid #e60067",
                        fontWeight: 600,
                        pb: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                      variant="h5"
                      gutterBottom
                    >
                      {plan.title}{" "}
                      <div>
                        {plan.star ? (
                          plan.doubleStar ? (
                            <>
                              {" "}
                              <StarsIcon sx={{ color: "#e60067" }} />{" "}
                              <StarsIcon sx={{ color: "#e60067" }} />
                            </>
                          ) : (
                            <StarsIcon sx={{ color: "#e60067" }} />
                          )
                        ) : (
                          ""
                        )}
                      </div>
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, fontSize: 20, color: "gray" }}
                    >
                      Price: <b style={{ color: "black" }}>{plan.price} BDT</b>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Daily {plan.dailyAd} ads
                    </Typography>
                    <Typography
                      sx={{ borderBottom: "1px solid #e60067", mb: 2, pb: 2 }}
                      variant="body1"
                      gutterBottom
                    >
                      Daily income: {plan.dailyIncome} BDT
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#e60067",
                        ":hover": { bgcolor: "#bd0065" },
                      }}
                      fullWidth
                      
                    >
                      BUY NOW
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid> 
       
      </Grid>
    </Grid>
  );
}
