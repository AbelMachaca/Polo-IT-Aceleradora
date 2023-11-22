# Proyecto Listado de Empresas - Polo IT Bs As

Este proyecto consiste en crear un listado de empresas asociadas al Polo IT Bs As. El objetivo es proporcionar a los usuarios información sobre las empresas, incluyendo su descripción y categorías.

## Tecnologías Utilizadas

- **Frontend:**
  - React
  - HTML
  - CSS
  - Axios (para manejar las solicitudes HTTP)

- **Backend:**
  - Node.js
  - Express
  - MongoDB (con Mongoose)
  - CORS (para manejar la política de mismo origen)

## Estructura del Proyecto

El proyecto sigue una estructura de carpetas básica:

- **backend:** Contiene los archivos relacionados con el servidor Node.js, las rutas y la conexión a la base de datos.
  
- **frontend:** Contiene los archivos de la interfaz de usuario desarrollada en React.

## Configuración del Proyecto

1. **Backend:**
   - Asegúrate de tener Node.js y MongoDB instalados en tu máquina.
   - Ejecuta `npm install` en la carpeta `backend` para instalar las dependencias.
   - Luego, ejecuta el servidor con `node app`.

2. **Frontend:**
   - Ejecuta `npm install` en la carpeta `frontend` para instalar las dependencias.
   - Después, inicia la aplicación con `npm start`.

## Funcionalidades Implementadas

1. **Listado de Empresas:**
   - Muestra una lista de empresas con información básica.

2. **Filtros:**
   - Permite filtrar las empresas por categoría y otros criterios.

3. **Conexión con MongoDB:**
   - Utiliza una base de datos MongoDB para almacenar la información de las empresas.

4. **Gestión de Estilos:**
   - Aplica estilos para una presentación agradable y responsiva en dispositivos móviles y de escritorio.

## Próximos Pasos

- Implementar la funcionalidad de envío de mensajes de contacto a las empresas.
- Mejorar la presentación de las imágenes de los logotipos.
- Refinar la interfaz de usuario para una experiencia más intuitiva.
