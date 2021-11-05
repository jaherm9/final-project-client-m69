import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor:'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:170
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{width:400, marginTop:'-110px'}}
            src={doctor} alt="img is missing" />
        </Grid>
        <Grid item xs={12} md={6} sx={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left'
        }}>
          <Box>
            <Typography variant="h6" sx={{mb: 5}} style={{color: '#5CE7ED'}}>
                Appointment
            </Typography>
            <Typography variant="h4" style={{color: 'white'}}>
                Make an Appointment Today
            </Typography>
            <Typography variant="h6" sx={{mb: 5}} style={{color: 'white', fontSize: '14', fonWeight:300}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, vel! Modi, ipsum magnam praesentium recusandae nostrum quam necessitatibus. Quibusdam reprehenderit aspernatur possimus saepe consectetur vitae?
            </Typography>
            <Button variant="contained" style={{backgroundColor:'5CE7ED'}}>Learn More</Button>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;