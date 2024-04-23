"use client"
import React, { useEffect, useState } from 'react'; 
import { useRouter } from "next/navigation";
import { CircularProgress, Container } from "@mui/material";

export default function PageRenderComponent() {
  const history = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change this value as needed

    return () => clearTimeout(timer);
  }, []);

  // Redirect to login page after loading
  useEffect(() => {
    if (!isLoading) {
      // Redirect to login page
      history.push('/login');
    }
  }, [isLoading, history]);

  return (
    <div >
      {isLoading ? (
         <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
         <CircularProgress />
       </Container>
      ) : (
        <div className="logo-container">
          {/* Your logo image with transitioned letters */}
          {/* <img src="/path/to/your/logo.png" alt="MHT Logo" className="logo" /> */}
        </div>
      )}
    </div>
  );
}
