import checkCompletado from './components/checkCompletado.js'
import eliminarIcon from './components/eliminarIcono.js';

const btn = document.querySelector('[data-from-btn]')

const agregarTarea = (evento) => {
  const lista = document.querySelector('[data-list]')
  const tarea = crearTarea(evento)
  lista.appendChild(tarea) 
}

// ! Arrow functions o funciones anónimas 
const crearTarea = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-from-input]')
  const calendario = document.querySelector('[data-from-date]')
  const date = calendario.value
  const formatoFecha = moment(date).format('DD/MM/YYYY')
  console.log(formatoFecha)
  const valor = input.value
  const tarea = document.createElement('li')
  tarea.classList.add('card')
  input.value= ''
  // Los appendChilds se agregan en orden, lo lee de arriba hacia abajo
  const tareaContenido = document.createElement('div') 
  tareaContenido.appendChild(checkCompletado())
  const tareatitulo = document.createElement('span')
  tareatitulo.classList.add('task')
  tareatitulo.innerText = valor
  tareaContenido.appendChild(tareatitulo)
  // Backticks
  const contenido = `
    <i class="fas fa-trash-alt trashIcon icon"></i>
  ` // HTML + JS
  const elementoFecha = document.createElement('span')
  elementoFecha.innerHTML = formatoFecha
  
  // tarea.innerHTML = contenido
  tarea.appendChild(tareaContenido)
  tarea.appendChild(elementoFecha)
  tarea.appendChild(eliminarIcon())
  return tarea
}

// Todo es un objeto dentro de nuestro navegador que tienen métodos para realizar una acción

btn.addEventListener('click', agregarTarea);

// ! Type en HTML = Module = diferentes archivos con funciones


