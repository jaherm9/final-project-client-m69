import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import { PrivateRoute } from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <PrivateRoute path="/appointment" element={<Appointment />} />
          <Route path="about" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;
