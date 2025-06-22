// Animation management
let displayedText = '';
let scale = 1.5;

// Typewriter effect
function updateTypewriter() {
    const typewriterText = document.getElementById('typewriterText');
    const typewriter = document.getElementById('typewriter');
    const fullText = translations[currentLanguage].hero.greeting;
    
    if (!typewriterText || !typewriter) return;
    
    // 1. Reset and set initial large scale
    displayedText = '';
    typewriter.style.transform = 'scale(1.5)';
    typewriterText.textContent = '';
    
    // 2. Start typewriter effect
    let current = 0;
    const interval = setInterval(() => {
        displayedText = fullText.slice(0, current + 1);
        typewriterText.textContent = displayedText;
        current++;
        if (current > fullText.length) {
            clearInterval(interval);
            // 3. Once typing is done, start scale-down animation
            animateScale();
        }
    }, 90);

    // Function to handle the scale-down animation
    function animateScale() {
        const animationDuration = 300; // 2 seconds
        const startTime = Date.now();
        
        const frame = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            
            if (elapsed < animationDuration) {
                const progress = elapsed / animationDuration;
                const newScale = 1.5 - (0.5 * progress); // Animate from 1.5 down to 1
                typewriter.style.transform = `scale(${newScale})`;
                requestAnimationFrame(frame);
            } else {
                typewriter.style.transform = 'scale(1)'; // Ensure it ends at scale 1
            }
        };
        requestAnimationFrame(frame);
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id !== 'inicio') { // Don't animate the hero section initially
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        }
    });
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initHeaderScroll();
}); 