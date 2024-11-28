async function listarVideos() {
    const conexion = await fetch("http://localhost:3001/videos");
    const conexionConvertida = conexion.json();

    return conexionConvertida
    console.log(conexionConvertida);

}

export const conexionAPI ={listarVideos();}
