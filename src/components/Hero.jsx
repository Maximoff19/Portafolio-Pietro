import React, { useState, useEffect } from 'react';
import { useLanguage, translations } from '../context/LanguageContext';
import '../styles/components/Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const fullText = language === 'es' ? '¡Hola! Soy Pietro' : 'Hello! I\'m Pietro';
  const [displayedText, setDisplayedText] = useState('');
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    // Efecto de escritura
    let current = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) clearInterval(interval);
    }, 90);

    // Animación de escala automática
    const animationDuration = 2000; // 2 segundos
    const startTime = Date.now();
    
    const animateScale = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      if (elapsed < animationDuration) {
        const progress = elapsed / animationDuration;
        const newScale = 1.5 - (0.5 * progress); // Reduce de 1.5 a 1
        setScale(newScale);
        requestAnimationFrame(animateScale);
      } else {
        setScale(1);
      }
    };

    requestAnimationFrame(animateScale);

    return () => {
      clearInterval(interval);
    };
  }, [fullText]);

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1>{t.hero.title}</h1>
        <h2 
          className="typewriter" 
          style={{ 
            transform: `scale(${scale})`,
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {displayedText}<span className="type-cursor">|</span>
        </h2>
        <p>{t.hero.subtitle}</p>
        <div className="hero-buttons">
          <a href="#proyectos" className="cta-button">{t.hero.cta}</a>
          <a href="#contacto" className="secondary-button">{t.hero.contact}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 