# Aluraflix

AluraPlay es una aplicación web que permite a los usuarios explorar, buscar e incorporar videos educativos en una plataforma interactiva con un backend simulado a través de json server.

## Tecnologías utilizadas
### Frontend:

**HTML5:** Estructuración de la interfaz de usuario.
    
**CSS3:** Diseño responsivo.
    
**JavaScript ES6+:** 
    
  Uso de módulos (import/export) para dividir lógica en módulos independientes.
  
  Manipulación del DOM para mostrar y actualizar la lista de videos.
  
  Manejo de promesas y async/await.
  
  Interacción con eventos.

### Backend:
**JSON Server:** Servidor de API REST simulado para gestionar los datos de videos.
Proporciona los datos mediante endpoints como GET /videos y permite realizar búsquedas con parámetros (?q=palabra_clave).


## Cómo usar la aplicación:

### Requisitos previos:
- Tener instalado Node.js para ejecutar el servidor JSON.
- Configurar un entorno local para servir los archivos HTML (por ejemplo, con Live Server).

### Pasos para ejecutar:
Clona el repositorio o descarga los archivos del proyecto.
Instala JSON Server globalmente (si no lo tienes):
```
npm install -g json-server
```

Inicia el servidor JSON:

```
npx json-server --watch db.json --port 3001
```

Asegúrate de que el archivo db.json contiene la lista de videos.

Abre el archivo index.html con un servidor local (por ejemplo, usando Live Server).

### Uso de la aplicación:
- La página principal cargará una lista completa de videos.
- Ingresa una palabra clave en el campo de búsqueda y haz clic en el botón para filtrar los resultados.
- Si no hay resultados para la búsqueda, aparecerá un mensaje indicando que no se encontraron videos.
- La aplicación también permite el ingreso de nuevos videos a la lista mediante el icono de "video"
