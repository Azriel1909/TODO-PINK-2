import checkCompletado from './checkCompletado.js'
import eliminarIcon from './eliminarIcono.js';

export const agregarTarea = (evento) => {
  const lista = document.querySelector('[data-list]')
  const tarea = crearTarea(evento)
  lista.appendChild(tarea) 
}

const crearTarea = (evento) => {
  evento.preventDefault();
  const listaDeTarea = JSON.parse(localStorage.getItem('tareas')) || []
  console.log(listaDeTarea)
  const input = document.querySelector('[data-from-input]')
  const calendario = document.querySelector('[data-from-date]')
  const date = calendario.value
  const formatoFecha = moment(date).format('DD/MM/YYYY')
  console.log(formatoFecha)
  const valor = input.value
  const tarea = document.createElement('li')
  tarea.classList.add('card')
  input.value= ''

  const tareaContenido = document.createElement('div') 

  const objetoTarea = {
    valor,
    formatoFecha
  }
  listaDeTarea.push(objetoTarea)
  localStorage.setItem('tareas', JSON.stringify(listaDeTarea))

  tareaContenido.appendChild(checkCompletado())
  const tareatitulo = document.createElement('span')
  tareatitulo.classList.add('task')
  tareatitulo.innerText = valor
  tareaContenido.appendChild(tareatitulo)

  // Backticks
  const contenido = `
    <i class="fas fa-trash-alt trashIcon icon"></i>` // HTML + JS
  const elementoFecha = document.createElement('span')
  elementoFecha.innerHTML = formatoFecha
  
  // tarea.innerHTML = contenido
  tarea.appendChild(tareaContenido)
  tarea.appendChild(elementoFecha)
  tarea.appendChild(eliminarIcon())
  return tarea
}
