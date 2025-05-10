
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "PHP", "Python", "JavaScript"]
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Django"]
  },
  {
    title: "Database Management",
    skills: ["SQL", "MySQL"]
  },
  {
    title: "Developer Tools",
    skills: ["Dev-C++", "Xampp", "Visual Studio", "Eclipse", "Spyder", "NetBeans", "Microsoft SQL Server Management Studio", "Radmin"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.title} 
              skills={category.skills} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6"
    >
      <h3 className="text-xl font-semibold mb-4 gradient-text">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 + 0.2 }}
            viewport={{ once: true }}
            className="skill-badge"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
