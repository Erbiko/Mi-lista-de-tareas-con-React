
//Estructura general de una tarea
//id
//Titulo
//Descripcion
//isDone = flse <= valor por defecto


import React from 'react'

export function Tarea({id, titulo, descripcion, eliminarTarea}) {
  return (
    <div key={id}>
        <header>
            <h3>{titulo}</h3>
        </header>
        <div>
            <p>{descripcion}</p>
            <aside>
                <input type="checkbox" defaultValue={false}/>
            </aside>            
        </div>

        <div>
            <button onClick={() => eliminarTarea(id)}>Eliminar</button>
            <button>Editar</button>
        </div>

    </div>
  )
}
