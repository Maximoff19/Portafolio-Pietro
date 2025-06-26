// Main functionality
function updateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    const skills = translations[currentLanguage].skills.items;
    
    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-card glass">
            <div class="skill-content-wrapper">
                <i class="${skill.icon} skill-icon"></i>
                <h3>${skill.name}</h3>
            </div>
        </div>
    `).join('');
}

function updateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const projects = [
        translations[currentLanguage].projects.cashy,
        translations[currentLanguage].projects.batsignal,
        translations[currentLanguage].projects.psycare
    ];
    
    projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="project-card glass">
            <div class="project-image">
                <img src="${project.cardImage}" alt="${project.title}" />
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description.substring(0, 150)}...</p>
                <div class="project-tech">
                    <div class="tech-tags-container">
                        ${project.techs.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <button class="view-project-btn" onclick="openProjectModal(${JSON.stringify(project).replace(/"/g, '&quot;')})">
                    ${translations[currentLanguage].projects.viewProject}
                </button>
            </div>
        </div>
    `).join('');
}

// Contact functionality
function initContact() {
    const copyButton = document.getElementById('copyEmailBtn');
    const notification = document.getElementById('copy-notification');
    const email = 'pietro.batimoff@gmail.com';
    
    if (!copyButton) return;

    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(email);
            notification.textContent = translations[currentLanguage].contact.copySuccess;
            notification.style.display = 'block';
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000);
        } catch (err) {
            notification.textContent = translations[currentLanguage].contact.copyError;
            notification.style.display = 'block';
            notification.style.backgroundColor = '#f44336';
            
            setTimeout(() => {
                notification.style.display = 'none';
                notification.style.backgroundColor = '';
            }, 2000);
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    updateSkills();
    updateProjects();
    initContact();
    initSmoothScrolling();

    // Menú hamburguesa
    const menuBtn = document.getElementById('menuBtn');
    const navContainer = document.getElementById('navContainer');
    if (menuBtn && navContainer) {
        menuBtn.addEventListener('click', () => {
            navContainer.classList.toggle('open');
        });
        // Cerrar menú al hacer clic en un enlace
        navContainer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navContainer.classList.remove('open');
            });
        });
    }

    const navCloseBtn = document.getElementById('navCloseBtn');
    if (navCloseBtn) {
        navCloseBtn.addEventListener('click', () => {
            navContainer.classList.remove('open');
        });
    }
