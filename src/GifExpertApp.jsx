import { useState } from "react"
import { AddCategory, GifGrid } from "./components"; // tomo el index.js

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory) => { // le paso la categoria que me viene del evento enviado x el hijo
      if (categories.includes( newCategory)) return; // Si ya existe, no la agrego

      setCategories( [...categories, newCategory]);
  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory onNewCategory={ (value) => onAddCategory(value) } />
          {/* recibo del hijo un evento con la categoria nueva 'value' que uso para llamar a onAddCategory
              que actualiza el estado de categories agregandole la categoria nueva */}
        

        {/* Listado de Gifs */}
        {/* Al mostrar líneas con un map es obligatorio definir una clave para cada una. */}
        {
          categories.map( (category) => ( // no usar el indice para la key xq lo usa React
            <GifGrid key={category} category={category}/> // Puedo reemplazar los {} + el return usando (). 
          ) )                                             // Debo pasarle al componente la key y la categoria
        }
    </>

  )
}



