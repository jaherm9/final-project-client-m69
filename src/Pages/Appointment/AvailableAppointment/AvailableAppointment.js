import { Container, Grid } from "@mui/material";
import React from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    Name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 2,
    Name: "Cosmetic Dentistry",
    time: "10:05 AM - 11:30 AM",
    space: 10,
  },
  {
    id: 3,
    Name: "Teetch Cleaning",
    time: "5:00 PM - 6:30 PM",
    space: 10,
  },
  {
    id: 4,
    Name: "Cabity Protection",
    time: "7:00 AM - 8:30 AM",
    space: 10,
  },
  {
    id: 5,
    Name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 6,
    Name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
];

const AvailableAppointment = ({ date }) => {
  return (
    <Container>
      <h2>Available Appointments: {date.toDateString()}</h2>

      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
