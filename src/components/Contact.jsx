
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto md:mx-0 max-w-md"
          >
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-6">
              Feel free to contact me through any of the methods below. I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+94 71 4242074</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:sakthiveljanakan@gmail.com" className="text-white hover:text-portfolio-secondary transition-colors">
                    sakthiveljanakan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Nallur, Jaffna, Northern, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/sakthivel-janakan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-portfolio-secondary transition-colors"
                  >
                    linkedin.com/in/sakthivel-janakan
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a 
                    href="https://github.com/janakan-45" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-portfolio-secondary transition-colors"
                  >
                    github.com/janakan-45
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 mx-auto md:mx-0 max-w-md w-full"
          >
            <h3 className="text-2xl font-semibold mb-6">Direct Contact</h3>
            <div className="space-y-6">
              <div className="bg-portfolio-primary/10 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-3">Let's Connect</h4>
                <p className="text-gray-300 mb-4">
                  I would be delighted to discuss potential collaborations or opportunities with you. Whether you have a project in mind or simply wish to connect, please don't hesitate to reach out. I'm always eager to engage in meaningful conversations about technology and innovation.
                </p>
                <a 
                  href="mailto:sakthiveljanakan@gmail.com" 
                  className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 block text-center"
                >
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
