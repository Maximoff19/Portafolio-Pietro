import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage, translations } from '../context/LanguageContext';
import '../styles/components/Skills.css';
import { FaSwift, FaHtml5, FaReact, FaJs, FaDatabase, FaCss3Alt, FaAngular, FaApple } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTypescript, SiFirebase, SiCplusplus } from 'react-icons/si';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const renderSkillIcon = (skillName) => {
    switch (skillName) {
      case 'Swift': return <FaSwift />;
      case 'HTML': return <FaHtml5 />;
      case 'React': return <FaReact />;
      case 'JavaScript': return <FaJs />;
      case 'MySQL': return <FaDatabase />;
      case 'MongoDB': return <SiMongodb />;
      case 'PostgreSQL': return <SiPostgresql />;
      case 'CSS': return <FaCss3Alt />;
      case 'Angular': return <FaAngular />;
      case 'TypeScript': return <SiTypescript />;
      case 'Firebase': return <SiFirebase />;
      case 'C++': return <SiCplusplus />;
      default: return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="habilidades" className="skills">
      <h2>{t.skills.title}</h2>
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {t.skills.items.map((skill, index) => (
          <motion.div 
            key={skill.name} 
            className="skill-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="skill-content-wrapper">
              <div className="skill-icon">
                {renderSkillIcon(skill.name)}
              </div>
              <h3>{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills; 