
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-300 mb-4">
              I am a second-year BSc (Hons) Computer Science and Software Engineering student at 
              SLIIT Northern Uni, with a passion for technology and problem-solving.
            </p>
            <p className="text-gray-300 mb-4">
              I have a solid foundation in programming languages such as Java, Python, and C++, 
              as well as web development technologies. I'm currently working as an intern at VULTURE LINES 
              TECH MANAGEMENT PVT LTD, an Indian company where I'm gaining valuable industry experience.
            </p>
            <p className="text-gray-300">
              My goal is to become a proficient full-stack developer who can create innovative solutions to real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="mb-4">
                <p className="text-portfolio-secondary font-medium">2021 - 2026</p>
                <h4 className="text-lg font-semibold">BSc(Hons) Computer Science and Software Engineering</h4>
                <p className="text-gray-400">SLIIT Northern Uni</p>
              </div>
            </div>

            <div className="glass-card p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">•</span> Tamil
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> English
                </li>
              </ul>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://github.com/janakan-45" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-portfolio-secondary hover:text-portfolio-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Visit my GitHub profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
