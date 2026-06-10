
//Estructura general de una tarea
//id
//Titulo
//Descripcion
//isDone = flse <= valor por defecto


import React from 'react'

export function Tarea({id, titulo, descripcion, isDone = false}) {
  return (
    <div key={id}>
        <header>
            <h3>{titulo}</h3>
        </header>
        <div>
            <p>{descripcion}</p>
        </div>
        <aside>
            <input type="checkbox" defaultValue={isDone}/>
        </aside>
    </div>
  )
}
