import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="about" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;
