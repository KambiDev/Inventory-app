# Inventory App

Una aplicación de gestión de inventario.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:
- `client/`: Código del lado del cliente / Frontend.
- `server/`: API backend construida con Node.js, Express y MySQL.

### Requisitos Previos
- Node.js (v14 o superior recomendado)
- Base de datos MySQL

### Instalación

1. Navega a la carpeta del servidor:
   ```bash
   cd server
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

### Scripts Disponibles

Dentro del directorio `server`, puedes ejecutar los siguientes comandos:

- **`npm run dev`**: Inicia el servidor en modo desarrollo utilizando `nodemon`. El servidor se reiniciará automáticamente si haces cambios en el código.
- **`npm start`**: Inicia el servidor en modo producción utilizando `node`.

### Tecnologías Principales
- **[Express](https://expressjs.com/)**: Framework web para Node.js.
- **[MySQL2](https://www.npmjs.com/package/mysql2)**: Cliente de MySQL para Node.js con soporte para Promesas.
- **[Dotenv](https://www.npmjs.com/package/dotenv)**: Carga variables de entorno desde un archivo `.env`.
- **[Nodemon](https://nodemon.io/)**: Utilidad de desarrollo que recarga automáticamente la aplicación.
