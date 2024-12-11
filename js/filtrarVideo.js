console.log("Script cargado correctamente");

import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

//validaciones

async function buscarVideos(evento) {
    evento.preventDefault();
    console.log("Evento disparado");

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    console.log("Datos de búsqueda:", datosDeBusqueda);
    
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);
    console.log("Resultado de la búsqueda:", busqueda);

    const listaDeBusqueda = document.querySelector("[data-lista]");
    listaDeBusqueda.replaceChildren();

    //Filtrar resultados
    const resultadosFiltrados = busqueda.filter(video => 
        video.titulo.toLowerCase().includes(datosDeBusqueda.toLowerCase())
    );
    console.log(`Resultados filtrados: ${resultadosFiltrados}`);

    // Crear tarjetas para los resultados filtrados
    resultadosFiltrados.forEach(elemento => 
        listaDeBusqueda.appendChild(crearCard(elemento.titulo, elemento.descripcion, elemento.url, elemento.imagen))
    );

    if (resultadosFiltrados.length === 0) {
        listaDeBusqueda.innerHTML = `<h2 class="mensaje__titulo">No encontramos videos para ese filtro</h2>`;
    }
}

const botonBusqueda = document.querySelector("[data-boton-busqueda]");
botonBusqueda.addEventListener("click", evento => buscarVideos(evento));
