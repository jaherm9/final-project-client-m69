import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';


const bannerBg = {
    background: `url(${bg})`
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item style={{...verticalCenter, textAlign: 'left' }} xs={12} md={5}>
        <Box>
            <Typography variant="h3">
                Your New Smile <br />
                Start Here
            </Typography>
            <Typography variant="h6" sx={{my: 3, fontSize: 13, fontWeight: 300, Color:'gray'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptas delectus officiis quis sapiente adipisci labore debitis at quaerat temporibus?
            </Typography>
            <Button variant="contained" style={{ backgroundColor:'#5CE7ED' }}>Get Appointment</Button>
            </Box>
        </Grid>
        <Grid item xs={12} md={7} style={verticalCenter}>
            <img style={{width:'300px'}} src={chair} alt="" />
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Banner;