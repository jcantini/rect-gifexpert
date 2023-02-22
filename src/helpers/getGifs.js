

// Esta función como es async, devuelve una promesa

export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SJIUgI8UzgMzDUhUikOBbB32J1O0JsyC&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({ // Devuelvo un objeto solo con las propiedades que me interesan
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })) // envolvi todo entre () para crear un return implícito

    return gifs;
};  