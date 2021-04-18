import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HomeHeader from '../HomeHeader/HomeHeader';
import SafeGuard from '../SafeGuard/SafeGuard';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import TravelRisk from '../TravelRisk/TravelRisk';

const HomePage = () => {
    return (
        <>
          <HomeHeader></HomeHeader>  
          <SafeGuard></SafeGuard>
          <TravelRisk></TravelRisk>
          <Services></Services>
          <Testimonials></Testimonials>
          <Footer></Footer>
        </>
    );
};

export default HomePage;