async function listarVideos() {
    const conexion = await fetch("http://localhost:3001/videos", {
    method:"GET",
    headers:{
        "Content-type":"application/json"
    }
});
    
    
    
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function enviarVideo(titulo, descripcion, url, imagen) {
    const conexion = await fetch("http://localhost:3001/videos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
    })
    if(!conexion.ok){
        throw new Error("No fue posible enviar el video");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
    console.log(conexionConvertida)
}

async function buscarVideos(palabraClave) {
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`)
    const conexionConvertida = conexion.json();
    console.log(conexionConvertida)
    return conexionConvertida;
}


export const conexionAPI = {
    listarVideos, enviarVideo, buscarVideos
}
