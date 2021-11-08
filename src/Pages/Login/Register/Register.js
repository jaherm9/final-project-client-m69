import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(field, value, newLoginData)
    // console.log(field, value);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password didn't match");
      return;
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom></Typography>
          Register
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="filled-basic"
                label="Your Name"
                name="name"
                onChange={handleOnChange}
                variant="filled"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="filled-basic"
                label="Your Email"
                name="email"
                type="email"
                onChange={handleOnChange}
                variant="filled"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="outlined-password-input"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                autoComplete="current-password"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="outlined-password-input"
                label="Retype Your Password"
                type="password"
                name="password2"
                onChange={handleOnChange}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                sx={{ width: "75%", m: 1 }}
                variant="contained"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Register? Please Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Create Successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
// 4 video minute
