
import React from 'react';
import { motion } from 'framer-motion';

// Import project images
import fruitBasket1 from '/lovable-uploads/23e00709-aaee-4ef8-b998-1d0d4e908ad8.png';
import fruitBasket2 from '/lovable-uploads/2ab7594f-45c7-4d3b-9612-43ccf30c3caa.png';
import shipShape from '/lovable-uploads/ef249b18-a110-4beb-8bd8-3ca8f1b06443.png';
import pocketAi1 from '/lovable-uploads/7ab7bb9a-5094-4f49-a265-d3eb5c661b7d.png';
import pocketAi2 from '/lovable-uploads/80372301-4547-42fc-8204-3edc9164af3a.png';
import pocketAi3 from '/lovable-uploads/d44da8f0-d9d8-489e-8e67-c3b061430a83.png';
import bmiCalc1 from '/lovable-uploads/f9fef967-4efc-44ce-9011-a55b7ccb91f4.png';
import bmiCalc2 from '/lovable-uploads/1d3b3403-e3a6-47fd-b0ba-21989223a64f.png';

const projects = [
  {
    id: 1,
    title: "Fruit Basket E-commerce Website",
    description: "A fully functional individual full-stack e-commerce website using HTML, CSS, JavaScript, and PHP.",
    date: "SLIIT CITY UNI 1st year 2nd semester - July 2024",
    images: [fruitBasket1, fruitBasket2],
    technologies: ["HTML", "CSS", "JavaScript", "PHP"]
  },
  {
    id: 2,
    title: "ShipShape OOP Java Swing Application",
    description: "A group project implementing an inventory management system using Java Swing and SQL.",
    date: "SLIIT CITY UNI 1st year 2nd semester - July 2024",
    images: [shipShape],
    technologies: ["Java", "Swing", "SQL"]
  },
  {
    id: 3,
    title: "Pocket AI Android App",
    description: "An Android app using Java, Firebase, and REST API to provide AI-powered features with real-time data synchronization and seamless user interaction.",
    date: "SLIIT CITY UNI 2nd year 1st semester - November 2024",
    images: [pocketAi1, pocketAi2, pocketAi3],
    technologies: ["Java", "Android", "Firebase", "REST API"]
  },
  {
    id: 4,
    title: "BMI Calculator",
    description: "A responsive BMI (Body Mass Index) calculator web application that allows users to input their weight and height to calculate their BMI value.",
    date: "2024",
    images: [bmiCalc1, bmiCalc2],
    technologies: ["HTML", "CSS", "JavaScript", "PHP"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden rounded-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="swiper-container h-full">
          <div className="absolute inset-0">
            <img 
              src={project.images[0]} 
              alt={project.title} 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark to-transparent"></div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-portfolio-secondary text-sm mb-2">{project.date}</p>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="skill-badge">
              {tech}
            </span>
          ))}
        </div>

        {project.images.length > 1 && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {project.images.slice(1).map((img, i) => (
              <div key={i} className="h-16 rounded overflow-hidden">
                <img 
                  src={img} 
                  alt={`${project.title} screenshot ${i+1}`} 
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
