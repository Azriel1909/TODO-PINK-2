import { crearTarea } from "./agregarTarea.js"
import elementoFecha from './elementoFecha.js'

export const leerTarea = () => {
  // Seleccionar lista para agregar las tareas
  const lista = document.querySelector('[data-list]')
  console.log(lista)
  // Leer información almacenada en el local storage
  const listaDeTareas = JSON.parse(localStorage.getItem('tareas')) || []
  // Recorremos el arreglo 
  listaDeTareas.forEach((tarea) => {
    lista.appendChild(elementoFecha(tarea.formatoFecha))
    lista.appendChild(crearTarea(tarea))
  })
}