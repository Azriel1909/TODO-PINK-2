import { crearTarea } from "./agregarTarea.js"

export const leerTarea = () => {
  // Seleccionar lista para agregar las tareas
  const lista = document.querySelector('[data-list]')
  console.log(lista)
  // Leer información almacenada en el local storage
  const listaDeTareas = JSON.parse(localStorage.getItem('tareas')) || []
  // Recorremos el arreglo 
  listaDeTareas.forEach((tarea) => {
    lista.appendChild(crearTarea(tarea))
  })
}