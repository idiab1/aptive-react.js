import React from 'react'
import Asked from '../Asked/Asked';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Pricing from '../Pricing/Pricing';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pricing />
        <Testimonials />
        <Asked />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Home