
/*
El formulario captura los datos del ususario
y se los envia a AOO.jsx para que este a su vez se los agrege
al nuevo array Tareas y se lo pasa a listadetareas.jsx para re-renderizar el componente lista de tareas
*/

import {useState} from 'react'

export function FormularioTarea({handleSumbit}) {

    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")

    function addTarea(){
        handleSumbit(titulo, descripcion)

        setTitulo("")
        setDescripcion("")
    }


  return (
    <div>
        <input type="text" placeholder='Titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
        <textarea placeholder='Descripcion'value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
        <button onClick={addTarea}>Agragar tarea</button>
    </div>
  )
}

