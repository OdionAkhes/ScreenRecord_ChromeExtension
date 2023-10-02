import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Landing