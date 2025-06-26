# Portfolio Personal - Pietro

Portfolio personal convertido de React a HTML, CSS y JavaScript vanilla, con funcionalidad de envío de emails usando Resend.

## Características

- ✨ Diseño moderno y responsivo
- 🌙 Modo oscuro/claro
- 🌍 Soporte multiidioma (Español/Inglés)
- 📱 Optimizado para móviles
- 📧 Formulario de contacto funcional
- 🎨 Animaciones suaves con CSS
- 🖼️ Modal de proyectos
- 🎯 Carrusel de proyectos en móviles

## Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y Flexbox/Grid)
- JavaScript Vanilla (ES6+)
- Node.js (para el servidor)
- Express.js
- Resend (para envío de emails)

## Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <tu-repositorio>
   cd portfolio-vanilla
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   - El API key de Resend ya está configurado en `server.js`
   - Si necesitas cambiar el email de destino, modifica la línea en `server.js`:
     ```javascript
     to: 'pietroxz19@gmail.com',
     ```

4. **Ejecuta el servidor:**
   ```bash
   npm start
   ```

5. **Abre tu navegador:**
   - Ve a `http://localhost:3000`

### Desarrollo

Para desarrollo con recarga automática:
```bash
npm run dev
```

## Estructura del Proyecto

```
portfolio-vanilla/
├── index.html              # Página principal
├── server.js               # Servidor Express
├── package.json            # Dependencias y scripts
├── styles/                 # Archivos CSS
│   ├── main.css           # Estilos globales
│   └── components/        # Componentes CSS
├── js/                    # Archivos JavaScript
│   ├── main.js           # Funcionalidad principal
│   ├── contact.js        # Formulario de contacto
│   ├── modal.js          # Modal de proyectos
│   ├── translations.js   # Traducciones
│   ├── language.js       # Cambio de idioma
│   ├── theme.js          # Cambio de tema
│   └── animations.js     # Animaciones
└── assets/               # Imágenes y recursos
```

## Funcionalidades

### Formulario de Contacto
- Validación de campos en tiempo real
- Envío de emails usando Resend
- Notificaciones de éxito/error
- Diseño responsivo

### Carrusel de Proyectos
- Scroll horizontal en móviles
- Snap scrolling para mejor UX
- Tarjetas con información detallada

### Modal de Proyectos
- Vista detallada de cada proyecto
- Imágenes y tecnologías utilizadas
- Animaciones de entrada/salida

### Cambio de Tema
- Modo oscuro/claro
- Persistencia de preferencia
- Transiciones suaves

### Multiidioma
- Español e Inglés
- Cambio dinámico sin recarga
- Persistencia de idioma seleccionado

## API Endpoints

### POST /api/send-email
Envía un email usando Resend.

**Body:**
```json
{
  "name": "Nombre del remitente",
  "email": "email@ejemplo.com",
  "message": "Contenido del mensaje"
}
```

**Respuesta:**
```json
{
  "message": "Mensaje enviado con éxito",
  "id": "email_id_from_resend"
}
```

## Personalización

### Cambiar Email de Destino
Modifica la línea en `server.js`:
```javascript
to: 'tu-email@gmail.com',
```

### Cambiar API Key de Resend
Modifica la línea en `server.js`:
```javascript
const resend = new Resend('tu-api-key-aqui');
```

### Agregar Nuevos Proyectos
Edita el archivo `js/translations.js` y agrega nuevos proyectos en el array de `projects`.

## Despliegue

### Vercel
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno:
   - `RESEND_API_KEY`: Tu API key de Resend
3. Deploy automático

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura las variables de entorno
3. Build command: `npm start`

### Heroku
1. Crea una app en Heroku
2. Conecta tu repositorio
3. Configura las variables de entorno
4. Deploy

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Pietro - pietroxz19@gmail.com

Enlaces del proyecto: [GitHub](https://github.com/Maximoff19) | [LinkedIn](https://www.linkedin.com/in/pietro-osores-marchese-7aa182192/) 