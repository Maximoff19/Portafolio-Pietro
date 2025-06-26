const express = require('express');
const { Resend } = require('resend');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Resend
const resend = new Resend('re_Bs2jdsav_7NfZsbRtJhnSkbwSYGahj5JH');

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to send emails
app.post('/api/send-email', async (req, res) => {
    console.log('Received email request:', req.body);
    
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            console.log('Validation failed: missing fields');
            return res.status(400).json({ 
                message: 'Todos los campos son requeridos' 
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log('Validation failed: invalid email');
            return res.status(400).json({ 
                message: 'Por favor ingresa un email válido' 
            });
        }

        console.log('Validation passed, sending email...');

        // Create HTML email content
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #007AFF; border-bottom: 2px solid #007AFF; padding-bottom: 10px;">
                    Nuevo mensaje desde tu portafolio
                </h2>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #333; margin-top: 0;">Información del remitente:</h3>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                </div>
                
                <div style="background: #fff; padding: 20px; border-left: 4px solid #007AFF; margin: 20px 0;">
                    <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
                    <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="color: #666; font-size: 14px;">
                        Este mensaje fue enviado desde tu portafolio web
                    </p>
                </div>
            </div>
        `;

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'pietroxz19@gmail.com',
            subject: `Nuevo mensaje de ${name} desde tu portafolio`,
            html: htmlContent,
            reply_to: email
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({ 
                message: 'Error al enviar el email. Inténtalo de nuevo.' 
            });
        }

        console.log('Email sent successfully:', data);
        res.status(200).json({ 
            message: 'Mensaje enviado con éxito',
            id: data.id 
        });

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ 
            message: 'Error interno del servidor. Inténtalo de nuevo.' 
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view your portfolio`);
}); 