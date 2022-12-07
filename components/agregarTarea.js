import checkCompletado from './checkCompletado.js'
import eliminarIcon from './eliminarIcono.js';
import { desplegarTarea } from './LeerTarea.js';

export const agregarTarea = (evento) => {
  evento.preventDefault();
  // Query selectors, lista para agregar las tareas.
  const lista = document.querySelector('[data-list]')
  const input = document.querySelector('[data-from-input]')
  const calendario = document.querySelector('[data-from-date]')
  // Fecha (formato de fecha)
  const valor = input.value
  const date = calendario.value
  const formatoFecha = moment(date).format('DD/MM/YYYY')

  if (valor == '' || date == '') {
    return 
  }

  // Nuevo registro, limpiar el input
  input.value = ''
  calendario.value = ''

  const objetoTarea = {
    valor,
    formatoFecha
  }

  lista.innerHTML = ''
  // Almacenamiento del local Storage, parse lo vuelve en un formato de objeto
  const listaDeTarea = JSON.parse(localStorage.getItem('tareas')) || []
  listaDeTarea.push(objetoTarea)
  localStorage.setItem('tareas', JSON.stringify(listaDeTarea))

  desplegarTarea()
}

// Recibe un objeto con dos llaves
export const crearTarea = ({ valor, formatoFecha }) => {
  // Generamos elementos
  const tarea = document.createElement('li')
        tarea.classList.add('card')

  const tareaContenido = document.createElement('div') 
  const tareatitulo = document.createElement('span')
        tareatitulo.classList.add('task')
        tareatitulo.innerText = valor
        tareaContenido.appendChild(checkCompletado())
        tareaContenido.appendChild(tareatitulo)
  
  const elementoFecha = document.createElement('span')
        elementoFecha.innerHTML = formatoFecha 
        tarea.appendChild(tareaContenido)
        tarea.appendChild(elementoFecha)
        tarea.appendChild(eliminarIcon())
  return tarea
}
