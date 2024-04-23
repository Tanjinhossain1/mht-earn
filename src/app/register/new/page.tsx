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
import PersonIcon from '@mui/icons-material/Person';

const RegisterNew = () => {
  const history = useRouter()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  const paperStyle = {
    padding: "20px",
    width: "350px",
    margin: "0 auto",
  };

  const textFieldStyle = {
    margin: "10px 0",
    width: "100%",
     
  };
const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
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
  const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordFocused(true);
  };

  const handleConfirmPasswordBlur = () => {
    setIsConfirmPasswordFocused(false);
  };
  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
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
        Register
        </Typography>
        <form onSubmit={handleSubmit}>
        <FormControl style={textFieldStyle} variant="standard">
        <InputLabel color={isUsernameFocused ? "secondary":"primary"} sx={{color:"#b800ae"}} htmlFor="input-with-icon-adornment">
          User Name
        </InputLabel>
        <Input
        required
        name="userName"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment color={isUsernameFocused ? "secondary":"primary"} position="start">
              <PersonIcon sx={{color:"#b800ae"}} color={isUsernameFocused ? "secondary":"inherit"} />
            </InputAdornment>
          } 
          style={textFieldStyle}
          color={isUsernameFocused ? "secondary":"primary"}
          onFocus={handleUsernameFocus}
          onBlur={handleUsernameBlur}
        />
      </FormControl>
        <FormControl style={textFieldStyle} variant="standard">
        <InputLabel color={isEmailFocused ? "secondary":"primary"} sx={{color:"#b800ae"}} htmlFor="input-with-icon-adornment">
          Email
        </InputLabel>
        <Input
        name="email"
        required
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment color={isEmailFocused ? "secondary":"primary"} position="start">
              <EmailIcon sx={{color:"#b800ae"}} color={isEmailFocused ? "secondary":"inherit"} />
            </InputAdornment>
          } 
          style={textFieldStyle}
          color={isEmailFocused ? "secondary":"primary"}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
        />
      </FormControl>
      <FormControl style={textFieldStyle} variant="standard">
        <InputLabel sx={{color:"#b800ae"}} color={isPasswordFocused ? "secondary":"primary"}  htmlFor="input-with-icon-adornment">
        Password
        </InputLabel>
        <Input
        name="password"
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
      <FormControl style={textFieldStyle} variant="standard">
        <InputLabel sx={{color:"#b800ae"}} color={isConfirmPasswordFocused ? "secondary":"primary"}  htmlFor="input-with-icon-adornment">
        Confirm Password
        </InputLabel>
        <Input
        name="confirmPassword"
        required
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment color={isConfirmPasswordFocused ? "secondary":"primary"} position="start">
              <PasswordIcon sx={{color:"#b800ae"}} color={isConfirmPasswordFocused ? "secondary":"inherit"} />
            </InputAdornment>
          } 
          style={textFieldStyle}
          color={isConfirmPasswordFocused ? "secondary":"primary"}
          type={showConfirmPassword ?"password":"text"}
          onFocus={handleConfirmPasswordFocus}
          onBlur={handleConfirmPasswordBlur}
          endAdornment={
            <InputAdornment position="end">
            <IconButton onClick={handleToggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <VisibilityOff sx={{color:"#b800ae"}} /> : <Visibility sx={{color:"#b800ae"}} />}
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
            Register
          </Button>

        </form>
        <Container sx={{textAlign:"center",mt:2}}>
        <Typography >Already Have Account?</Typography>
        <Typography
        onClick={()=>history.push("/login")} sx={{color:"#bf00a6",cursor:"pointer",fontWeight:600,":hover":{color:"#ff6600"}}}>Login Now</Typography>
        </Container>
      </Paper>
    </Container>
  );
};

export default RegisterNew;
