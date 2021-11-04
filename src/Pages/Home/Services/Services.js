import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services =[
    {
        name: 'Flouride Treatment',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati debitis ipsa quidem placeat delectus dicta alias molestiae, incidunt quod ea reprehenderit. Soluta voluptatum explicabo assumenda quod rem exercitationem provident incidunt.',
        img: flouride
    },
    {
        name: 'Cavity Filling',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati debitis ipsa quidem placeat delectus dicta alias molestiae, incidunt quod ea reprehenderit. Soluta voluptatum explicabo assumenda quod rem exercitationem provident incidunt.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati debitis ipsa quidem placeat delectus dicta alias molestiae, incidunt quod ea reprehenderit. Soluta voluptatum explicabo assumenda quod rem exercitationem provident incidunt.',
        img: whitening
    }
]


const Services = () => {
    return (
        
            <Box sx={{ flexGrow: 1 }}>
    <Container>
    <Typography sx={{ fontWeight: 500, color: 'success.main',  m: 2 }} variant="h6" component="div">
          OUR SERVICES
        </Typography>
    <Typography sx={{ fontWeight: 600, m: 5}} variant="h6" component="div">
          SERVICES WE PROVIDE
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service => <Service
                key={service.name}
                service={service}
                ></Service>)
        }
      </Grid>
      </Container>
    </Box>
        
    );
};

export default Services;