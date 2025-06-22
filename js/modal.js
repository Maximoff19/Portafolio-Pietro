// Modal management
function initModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');

    // Close modal
    function closeModal() {
        modalOverlay.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }

    // Open modal with project data
    function openModal(projectData) {
        const { title, description, techs, modalImages } = projectData;
        
        modalContent.innerHTML = `
            <div class="modal-header">
                <h2>${title}</h2>
            </div>
            <div class="modal-body">
                <div class="modal-images">
                    ${modalImages.map(img => `<img src="${img}" alt="${title}" />`).join('')}
                </div>
                <div class="modal-description">
                    <p>${description}</p>
                    <div class="modal-techs">
                        <div class="tech-tags-container">
                            ${techs.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        modalOverlay.style.display = 'flex';
        document.body.classList.add('no-scroll');
    }

    // Event listeners
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
            closeModal();
        }
    });

    // Make openModal available globally
    window.openProjectModal = openModal;
}

// Initialize modal
document.addEventListener('DOMContentLoaded', initModal); 