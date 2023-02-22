import { useState } from 'react';

export const AddCategory = ( { onNewCategory }) => { 

  const [inputValue, setInputValue] = useState('');  

  // Con esta función permito escribir en el campo de input y guardo el valor en el estado
  const onInputChange = (e) => { 
    setInputValue( e.target.value ) // este es el valor del input que tomo del evento que disparo el onChange
  }

  // El onSubmit del form se dispara cuando en el input doy Enter
  const onSubmit = (e) => {
        e.preventDefault(); // El comportamiento normal del submit es que haga un refresh del browser y 
                            // como recarga el form, limpia el evento y se perderian sus valores.

        if (inputValue.length <= 1) return // si no tiene por lo menos 2 caracteres no la agrego 
        
        onNewCategory( inputValue.trim() ); // emito al padre un evento con el valor de la categoria nueva 
        setInputValue(''); // Limpio el input    
  }

  return (
    <form onSubmit={ onSubmit }> 
      <input 
        type="text"
        placeholder="Buscar gifs"
        value = { inputValue } // Lo conecto con el estado
        onChange= { onInputChange } // Es una simplificacion de (e) => onInputChange(e). Paso el evento.
      />
    </form>
  )
}


