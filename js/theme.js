// Theme management
let currentTheme = localStorage.getItem('theme') || 'dark';

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Set initial theme
    setTheme(currentTheme);
    
    // Event listener for theme toggle
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });
}

function setTheme(theme) {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-solid fa-sun';
        themeToggle.setAttribute('aria-label', 'Cambiar a modo oscuro');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fa-solid fa-moon';
        themeToggle.setAttribute('aria-label', 'Cambiar a modo claro');
    }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initTheme); 