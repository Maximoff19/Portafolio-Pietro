// Contact form functionality
function initContact() {
    console.log('initContact function called');
    
    const contactForm = document.getElementById('contactForm');
    const emailBtn = document.getElementById('emailBtn');
    const copySuccess = document.getElementById('copySuccess');

    console.log('Contact form found:', contactForm);
    console.log('Email button found:', emailBtn);

    // Copy email functionality
    if (emailBtn) {
        emailBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText('pietroxz19@gmail.com');
                showCopySuccess();
            } catch (err) {
                console.error('Error copying email:', err);
            }
        });
    }

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            console.log('Form submitted');
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            console.log('Form data:', { name, email, message });
            
            if (!name || !email || !message) {
                showNotification('Por favor completa todos los campos', 'error');
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            try {
                console.log('Sending request to /api/send-email');
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        message
                    })
                });

                console.log('Response received:', response.status);
                console.log('Response headers:', response.headers);
                console.log('Response ok:', response.ok);

                if (response.ok) {
                    const result = await response.json();
                    console.log('Success:', result);
                    showNotification('¡Mensaje enviado con éxito!', 'success');
                    contactForm.reset();
                } else {
                    const error = await response.json();
                    console.log('Error response:', error);
                    showNotification(error.message || 'Error al enviar el mensaje', 'error');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                console.error('Error details:', {
                    name: error.name,
                    message: error.message,
                    stack: error.stack
                });
                showNotification('Error al enviar el mensaje. Inténtalo de nuevo.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    } else {
        console.error('Contact form not found!');
    }
}

function showCopySuccess() {
    const copySuccess = document.getElementById('copySuccess');
    if (copySuccess) {
        copySuccess.style.display = 'block';
        setTimeout(() => {
            copySuccess.style.display = 'none';
        }, 2000);
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.backgroundColor = '#10b981';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#ef4444';
    } else {
        notification.style.backgroundColor = '#3b82f6';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
} 