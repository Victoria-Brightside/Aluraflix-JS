async function listarVideos() {
    const conexion = await fetch("http://localhost:3001/videos");
    const conexionConvertida = conexion.json();

    return conexionConvertida


}

export const conexionAPI ={listarVideos}
