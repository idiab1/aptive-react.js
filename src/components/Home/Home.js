import React from 'react'
import Asked from '../Asked/Asked';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Pricing from '../Pricing/Pricing';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pricing />

        <Asked />
        <Footer />
    </div>
  )
}

export default Home