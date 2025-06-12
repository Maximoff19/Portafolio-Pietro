import React from 'react';
import { useLanguage, translations } from '../context/LanguageContext';
import '../styles/components/Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{t.footer.copyright}</p>
        <div className="footer-links">
          <a href="#inicio">{t.header.home}</a>
          <a href="#habilidades">{t.header.skills}</a>
          <a href="#proyectos">{t.header.projects}</a>
          <a href="#contacto">{t.header.contact}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 