import React from 'react';
import { useLanguage, translations } from '../context/LanguageContext';
import '../styles/components/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];

  if (!project) return null;

  // Filtrar la imagen de portada (primera imagen)
  const additionalImages = project.images.slice(1);

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="project-modal-body">
          {additionalImages.length > 0 && (
            <div className="project-modal-images">
              {additionalImages.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`${project.title} - Imagen ${index + 1}`} 
                  className="project-modal-image"
                />
              ))}
            </div>
          )}
          <div className="project-modal-info">
            <p className="project-modal-description">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 