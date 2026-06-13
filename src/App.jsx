import {useState} from 'react'
import { ListaDeTareas } from "./Components/ListaDeTareas";
import {FormularioTarea} from './Components/FormularioTarea'


function App() {

  const [tareas, setTareas] = useState([])
  const [tareaParaEditar, setTareaParaEditar] = useState(null)
  const [enEdicion, setEnEdicion] = useState(false)

  // Función para ACTUALIZAR tarea existente
  const actualizarTarea = (id, nuevoTitulo, nuevaDescripcion) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        // Si encuentro la tarea, creo una copia con los nuevos datos
        return {
          ...tarea,  // Mantengo id y isDone
          titulo: nuevoTitulo,
          descripcion: nuevaDescripcion
        }
      }
      return tarea  // Las otras tareas quedan igual
    })



    setTareas(tareasActualizadas)
    setTareaParaEditar(null)  // Limpio el estado de edición
  }

  // Modifico handleSumbit para que reciba parámetros diferentes según el caso
  const manejarSubmit = (id, titulo, descripcion) => {
    if (id) {
      // Si tengo ID, significa que estoy actualizando
      actualizarTarea(id, titulo, descripcion)
    } else {
      // Si no tengo ID, estoy creando una nueva
      const nuevaTarea = {
        id: crypto.randomUUID(),
        titulo: titulo,
        descripcion: descripcion,
        isDone: false
      }
      setTareas([...tareas, nuevaTarea])
    }
  }


  const eliminarTarea = (id) =>{

    const nuevoArray = tareas.filter(n => n.id !== id)

    setTareas(nuevoArray)

  }


  const editarTarea = (id) => {
    const tareaEncontrada = tareas.find(tarea => tarea.id === id)
    setTareaParaEditar(tareaEncontrada)  // Esto activará el useEffect en el formulario
  }





  return (
    <>
      <h1>Mi lista de Tareas</h1>
      <FormularioTarea manejarSubmit={manejarSubmit} tareaParaEditar={tareaParaEditar} setTareaParaEditar={setTareaParaEditar}/>

      <hr />

      <ListaDeTareas tareas={tareas} eliminarTarea={eliminarTarea} editarTarea={editarTarea}/>
      
      

    </>
    
  )
}

export default App