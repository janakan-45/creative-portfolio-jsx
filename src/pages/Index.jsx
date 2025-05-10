
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-portfolio-dark text-white">
      {/* Background gradient elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-portfolio-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-portfolio-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
