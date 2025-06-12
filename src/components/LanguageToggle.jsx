import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/components/LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageToggle; 