
import useFetchGifs from "../hooks/useFetchGifs";
import GiftItem from "./GiftItem";


export const GifGrid =  ( { category }) => {

  const { images, isLoading} = useFetchGifs( category );

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && (<h2>Cargando imágenes...</h2>)
        }
    
        <div className="card-grid"> 
          {
            images.map( (image) => (
             <GiftItem key={image.id}
                       { ... image}
             />))
          }
        </div>
        

    </>
  )
}


// { ... image} esto lo que hace es pasarle al componente cada una de las propiedades en forma invividual 
// de esta forma en el lado del componente que las recibe, las capturo directamente con el nombre de
// su clave. En esta caso recibo const GiftItem = ( {id, title, url} ) y solo declaro las que necesito usar

// isLoading ? (<h2>Cargando imágenes...</h2>) : null 
// Este ternario como la 2da parte no me interesa lo puedo reemplazar por lo que se llama is simple
// isLoading && (<h2>Cargando imágenes...</h2>) Solo si isloading es true, se ejecuta lo siguiente
