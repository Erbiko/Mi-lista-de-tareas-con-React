import {useState} from 'react'
import { ListaDeTareas } from "./Components/ListaDeTareas";
import {FormularioTarea} from './Components/FormularioTarea'


function App() {

  const [tareas, setTareas] = useState([])

  const handleSumbit = (titulo, descripcion, isDone = false) =>{
    const nuevaTarea = {
      id: crypto.randomUUID(),  // o usar crypto.randomUUID(), o un contador
      titulo: titulo,
      descripcion: descripcion,
      isDone: false
    }

    setTareas([...tareas, nuevaTarea])

  }



  return (
    <>
      <h1>Mi lista de Tareas</h1>
      <FormularioTarea handleSumbit={handleSumbit}/>

      <hr />

      <ListaDeTareas tareas={tareas} />
      
      

    </>
    
  )
}

export default App