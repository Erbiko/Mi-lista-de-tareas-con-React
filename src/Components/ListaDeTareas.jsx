

/*
La lista de tareas es donde se mostraran todas las tareas existentes hasta el momento.

por ahora se mostraran todas, mas adelante las filtraremos por completadas y pendientes

*/

import { Tarea } from "./Tarea";

export function ListaDeTareas({tareas, eliminarTarea, editarTarea}) {

    

  return (
    <section>
        <header>
            <h2>TAREAS</h2>    
        </header>

        <div>
            {
                tareas.map((tareas) => {
                    return(
                        <Tarea key={tareas.id} id={tareas.id} titulo={tareas.titulo} descripcion={tareas.descripcion} isDone={tareas.isDone} eliminarTarea={eliminarTarea} editarTarea={editarTarea}/>
                    )
                })

            }
        </div>
        
    </section>
  )
}

