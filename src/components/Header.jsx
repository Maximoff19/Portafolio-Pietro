import React, { useState, useEffect } from 'react';
import { useLanguage, translations } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import '../styles/components/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <a href="#inicio" className="nav-link">{t.header.home}</a>
        <a href="#proyectos" className="nav-link">{t.header.projects}</a>
        <a href="#habilidades" className="nav-link">{t.header.skills}</a>
        <a href="#contacto" className="nav-link">{t.header.contact}</a>
      </nav>
      <div className="language-toggle-mobile-container">
        <LanguageToggle />
      </div>
    </header>
  );
};

export default Header; 