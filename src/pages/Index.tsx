
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Solutions from '@/components/Solutions';
import Community from '@/components/Community';
import Products from '@/components/Products';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Solutions />
      <Community />
      <Products />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
