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
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(field, value);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
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
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New user? Please Register</Button>
              </NavLink>

              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">User Create Successfully!</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
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
