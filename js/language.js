// Language management
let currentLanguage = 'es';

// Language toggle functionality
function initLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    const languageText = languageToggle.querySelector('.language-text');
    
    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        languageText.textContent = currentLanguage.toUpperCase();
        updateLanguage();
    });
}

// Update all text content based on current language
function updateLanguage() {
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        const keys = key.split('.');
        let value = translations[currentLanguage];
        
        for (const k of keys) {
            value = value[k];
        }
        
        if (value) {
            element.textContent = value;
        }
    });
    
    // Update skills
    updateSkills();
    
    // Update projects
    updateProjects();
    
    // Update typewriter text
    updateTypewriter();
}

// Initialize language system
document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    updateLanguage();
}); 