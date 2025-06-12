import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage, translations } from '../context/LanguageContext';
import '../styles/components/Projects.css';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'cashy',
      title: t.projects.cashy.title,
      description: t.projects.cashy.description,
      images: t.projects.cashy.images,
      technologies: t.projects.cashy.techs
    },
    {
      id: 'batsignal',
      title: t.projects.batsignal.title,
      description: t.projects.batsignal.description,
      images: t.projects.batsignal.images,
      technologies: t.projects.batsignal.techs
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="proyectos" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t.projects.title}
      </motion.h2>
      <motion.div 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="project-image">
              {project.images && project.images.length > 0 && (
                <img src={project.images[0]} alt={`${project.title} - Cover`} />
              )}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                <h4>{t.projects.technologies}:</h4>
                <div className="tech-tags-container">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <button 
                className="view-project-btn"
                onClick={() => setSelectedProject(project)}
              >
                {t.projects.viewProject}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects; 