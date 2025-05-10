
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-20 section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <p className="text-portfolio-secondary font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Sakthivel Janakan
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300">
              Full Stack Developer <span className="text-portfolio-secondary">Intern</span>
            </h2>
            <p className="text-gray-400 max-w-lg mt-4">
              A passionate Computer Science student with expertise in web and mobile development.
              Currently seeking internships to contribute to exciting projects and further develop my skills.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="#contact" 
                className="bg-portfolio-primary hover:bg-portfolio-secondary text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="border border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/10 px-6 py-3 rounded-md transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex justify-end"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-primary to-portfolio-secondary opacity-20 blur-xl"></div>
              <div className="absolute inset-4 rounded-full bg-portfolio-dark"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold gradient-text">SJ</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
