import { Container, Grid, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10:05 AM - 11:30 AM",
    space: 10,
  },
  {
    id: 3,
    name: "Teetch Cleaning",
    time: "5:00 PM - 6:30 PM",
    space: 10,
  },
  {
    id: 4,
    name: "Cabity Protection",
    time: "7:00 AM - 8:30 AM",
    space: 10,
  },
  {
    id: 5,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
];

const AvailableAppointment = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false)
  return (
    <Container>
      <Typography variant="h5" sx={{ color: "info.main", fontWeight: 600 }}>
        Available Appointments: {date.toDateString()}
      </Typography>
      {bookingSuccess && <Alert severity="success"> Booked Appointment Successfully!</Alert>
        }
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} date={date}
          setBookingSuccess={setBookingSuccess}
          >

          </Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
