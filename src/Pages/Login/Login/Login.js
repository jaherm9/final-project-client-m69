import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(field, value);
  };
  const handleLoginSubmit = (e) => {
    alert("Email submited successfully");
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="filled-basic"
                label="Your Email"
                name="email"
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
              <Button
                type="submit"
                sx={{ width: "75%", m: 1 }}
                variant="contained"
              >
                Login
              </Button>
            </form>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
