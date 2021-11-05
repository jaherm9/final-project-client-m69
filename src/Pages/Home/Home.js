import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Services from './Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <AppointmentBanner/>
        </div>
    );
};

export default Home;