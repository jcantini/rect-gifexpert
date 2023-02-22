// Este es un custom hook. Por convención todos los hooks los llamo use... así rápidamente identifico 
// que se trata de un hook. Un hook es una función.

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState([]);  // uso un estado para guardar las imagenes que traigo
    const [ isLoading, setLoading] = useState( true );

    const getImages = async () => {
        const newImages = await getGifs( category ); // Cargo las imagenes en el estado
        setImages(newImages);
        setLoading( false );
    }

    useEffect(() => {
        getImages();
    }, []); // Se va a ejecutar una única vez
  
    return {
        images,          // Por EMAC6 si la key se llama igual que el campo images: images, puedo abreviarlo
        isLoading        // isLoading: isLoading
    }
}

export default useFetchGifs
