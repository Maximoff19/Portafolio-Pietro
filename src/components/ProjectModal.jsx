import React from 'react';
import { useLanguage, translations } from '../context/LanguageContext';
import '../styles/components/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];

  if (!project) return null;

  // Las imágenes adicionales ya se filtran en Projects.jsx
  // Aquí, project.images ya contiene solo las imágenes adicionales

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="project-modal-header">
          <h2>{project.title}</h2>
        </div>
        <div className="project-modal-body">
          <div className="project-modal-images">
            {project.images && project.images.map((image, index) => (
              <img 
                key={index} 
                src={image.startsWith('/Portafolio_v0.02/') ? image : '/Portafolio_v0.02' + image} 
                alt={`${project.title} - Imagen ${index + 1}`} 
                className="project-modal-image"
                onError={(e) => {
                  console.error(`Error loading image: ${image}`);
                  e.target.style.display = 'none';
                }}
              />
            ))}
          </div>
          <div className="project-modal-info">
            <p className="project-modal-description">{project.description}</p>
            {project.technologies && (
              <div className="project-modal-techs">
                <h3>{t.projects.technologies}</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 