# Sistema Web Integral para el Ayuntamiento de Teocelo (Backend)

Este proyecto es el backend del "Sistema Web Integral para Facilitar los Procesos que se Realizan en el Ayuntamiento de Teocelo". Desarrollado con Node.js y Express, y utilizando MongoDB como base de datos, el sistema está diseñado para manejar de manera eficiente las operaciones y datos del ayuntamiento.

## Características

- **API RESTful**: Endpoints bien definidos para interactuar con el frontend.
- **Seguridad**: Implementación de autenticación y autorización.
- **Manejo de datos**: CRUD (Crear, Leer, Actualizar, Eliminar) para diversas entidades del sistema.
- **Escalabilidad**: Estructura modular y clara para facilitar la escalabilidad y el mantenimiento.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework de aplicación web para Node.js.
- **MongoDB**: Base de datos NoSQL para almacenar datos de manera flexible y escalable.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js.
- **JWT (JSON Web Tokens)**: Para autenticación y autorización.
- **dotenv**: Para manejar variables de entorno.

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Alba2809/teocelo-cbs-api
   cd teocelo-cbs-api
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Configura las variables de entorno**:
   Crea un archivo .env en la raíz del proyecto y añade las variables necesarias. Por ejemplo:

   ```bash
   EMAIL_PASSWORD=""
   EMAIL_SERVER_EMAIL=""   
   EMAIL_DESTINATION=""   
   TOKEN_SECRET=""
   ```

   [Video de como conseguir las credenciales del servicio de correos.](https://www.youtube.com/watch?v=KjheexBLY4A)

4. **Inicia el servidor**:

   ```bash
   npm run dev
   ```

## Endpoints Principales

### Autenticación:

- **POST `/api/login`**: Iniciar sesión.
- **POST `/api/register`**: Registrar un nuevo usuario.
- **PUT `/api/update`**: Actualizar un usuario.
