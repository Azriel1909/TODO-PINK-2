import { crearTarea } from "./agregarTarea.js"
import elementoFecha from './elementoFecha.js'
import { uniqueDates } from "../services/date.js"

export const desplegarTarea = () => {
  // Seleccionar lista para agregar las tareas
  const lista = document.querySelector('[data-list]')
  // Leer información almacenada en el local storage
  const listaDeTareas = JSON.parse(localStorage.getItem('tareas')) || []
  const dates = uniqueDates(listaDeTareas)

  dates.forEach( fecha => {
    // objeto module
    const momentoFecha = moment( fecha, 'DD/MM/YYYY' )
    lista.appendChild( elementoFecha(fecha) )
    // Recorremos el arreglo 
    listaDeTareas.forEach((tarea) => {
      const fechaTarea = moment(tarea.formatoFecha, 'DD/MM/YYYY' )
      const diff = momentoFecha.diff(fechaTarea)
      if(diff == 0){
        lista.appendChild(crearTarea(tarea))
      }
    })
  })
}