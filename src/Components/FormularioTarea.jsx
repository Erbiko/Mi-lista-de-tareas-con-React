import { useState, useEffect } from 'react'  // Necesito useEffect

export function FormularioTarea({ manejarSubmit, tareaParaEditar, setTareaParaEditar }) {
  // Estos estados controlan lo que el usuario escribe en los inputs
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  // Este estado decide si el botón dice "Agregar" o "Actualizar"
  const [editando, setEditando] = useState(false)

  // EFECTO 1: Cuando llega una tarea para editar, lleno el formulario
  useEffect(() => {
    if (tareaParaEditar) {
      setTitulo(tareaParaEditar.titulo)      // Cargo el título existente
      setDescripcion(tareaParaEditar.descripcion) // Cargo la descripción
      setEditando(true)  // Cambio el modo a "editando"
    }
  }, [tareaParaEditar]) // Este efecto se ejecuta cada vez que tareaParaEditar cambia

  // Función para resetear el formulario después de agregar o editar
  function resetearFormulario() {
    setTitulo("")
    setDescripcion("")
    setEditando(false)
    setTareaParaEditar(null)  // Limpio la tarea en edición en el padre
  }

  // Función principal que decide si agregar o editar
  function manejarEnvio() {
    if (editando) {
      // MODO EDICIÓN: actualizo la tarea existente
      manejarSubmit(tareaParaEditar.id, titulo, descripcion)
    } else {
      // MODO CREACIÓN: creo una nueva tarea
      manejarSubmit(null, titulo, descripcion)
    }
    resetearFormulario()  // Limpio todo después de la acción
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder='Titulo' 
        value={titulo}  // AHORA USO value, NO defaultValue
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea 
        placeholder='Descripcion' 
        value={descripcion}  // AHORA USO value, NO defaultValue
        onChange={(e) => setDescripcion(e.target.value)}
      />
      {/* El texto del botón cambia según el modo */}
      <button onClick={manejarEnvio}>
        {editando ? "Actualizar tarea" : "Agregar tarea"}
      </button>
      {/* Botón opcional para cancelar edición */}
      {editando && (
        <button onClick={resetearFormulario}>Cancelar edición</button>
      )}
    </div>
  )
}