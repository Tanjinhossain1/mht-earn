"use client";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
import React, { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Lock';
import { useRouter } from "next/navigation";

const RegisterNew = () => {
  const history = useRouter()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const paperStyle = {
    padding: "20px",
    width: "350px",
    margin: "0 auto",
  };

  const textFieldStyle = {
    margin: "10px 0",
    width: "100%",
     
  };
const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    setIsUsernameFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can add your login logic
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset the form
    // setUsername("");
    // setPassword("");
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper style={paperStyle} elevation={1}>
        <Typography sx={{color:"#b800ae",fontWeight:"600",textAlign:"center"}} variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
        <FormControl style={textFieldStyle} variant="standard">
        <InputLabel color={isUsernameFocused ? "secondary":"primary"} sx={{color:"#b800ae"}} htmlFor="input-with-icon-adornment">
          Email
        </InputLabel>
        <Input
        required
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment color={isUsernameFocused ? "secondary":"primary"} position="start">
              <EmailIcon sx={{color:"#b800ae"}} color={isUsernameFocused ? "secondary":"inherit"} />
            </InputAdornment>
          } 
          style={textFieldStyle}
          color={isUsernameFocused ? "secondary":"primary"}
          onFocus={handleUsernameFocus}
          onBlur={handleUsernameBlur}
        />
      </FormControl>
      <FormControl style={textFieldStyle} variant="standard">
        <InputLabel sx={{color:"#b800ae"}} color={isPasswordFocused ? "secondary":"primary"}  htmlFor="input-with-icon-adornment">
        Password
        </InputLabel>
        <Input
        required
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment color={isPasswordFocused ? "secondary":"primary"} position="start">
              <PasswordIcon sx={{color:"#b800ae"}} color={isPasswordFocused ? "secondary":"inherit"} />
            </InputAdornment>
          } 
          style={textFieldStyle}
          color={isPasswordFocused ? "secondary":"primary"}
          type={showPassword ?"password":"text"}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          endAdornment={
            <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility}>
              {showPassword ? <VisibilityOff sx={{color:"#b800ae"}} /> : <Visibility sx={{color:"#b800ae"}} />}
            </IconButton>
          </InputAdornment>
          }
        />
      </FormControl>
          
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{ width: "100%" }}
          >
            Login
          </Button>

        </form>
        <Container sx={{textAlign:"center",mt:2}}>
        <Typography >Not Registered Yet?</Typography>
        <Typography
        onClick={()=>history.push("/register/new")} sx={{color:"#bf00a6",cursor:"pointer",fontWeight:600,":hover":{color:"#ff6600"}}}>Register Now</Typography>
        </Container>
      </Paper>
    </Container>
  );
};

export default RegisterNew;
