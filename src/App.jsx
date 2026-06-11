import {useState} from 'react'
import { ListaDeTareas } from "./Components/ListaDeTareas";
import {FormularioTarea} from './Components/FormularioTarea'


function App() {

  const [tareas, setTareas] = useState([])

  const handleSumbit = (titulo, descripcion) =>{
    const nuevaTarea = {
      id: crypto.randomUUID(),
      titulo: titulo,
      descripcion: descripcion,
      isDone: false
    }

    setTareas([...tareas, nuevaTarea])

  }


  const eliminarTarea = (id) =>{

    const nuevoArray = tareas.filter(n => n.id !== id)

    setTareas(nuevoArray)

  }



  return (
    <>
      <h1>Mi lista de Tareas</h1>
      <FormularioTarea handleSumbit={handleSumbit}/>

      <hr />

      <ListaDeTareas tareas={tareas} eliminarTarea={eliminarTarea}/>
      
      

    </>
    
  )
}

export default App