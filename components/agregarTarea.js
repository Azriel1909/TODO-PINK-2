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

  if (valor === '' || date === '') {
    return 
  }

  // Nuevo registro, limpiar el input
  input.valor = '' // or value
  calendario.valor = '' // or value

  const completar = false // Tarea creada sin completar


  const objetoTarea = {
    valor,
    formatoFecha,
    completar,
    id: uuid.v4(),
  }

  lista.innerHTML = ''
  // Almacenamiento del local Storage, parse lo vuelve en un formato de objeto
  const listaDeTarea = JSON.parse(localStorage.getItem('tareas')) || []
  listaDeTarea.push(objetoTarea)
  localStorage.setItem('tareas', JSON.stringify(listaDeTarea))

  desplegarTarea()
}

// Recibe un objeto con dos llaves
export const crearTarea = ({ valor, formatoFecha, completar, id }) => {
  // Generamos elementos
  const tarea = document.createElement('li')
        tarea.classList.add('card')
  const tareaContenido = document.createElement('div') 
  const check1 = checkCompletado(id)
  
  // En caso de que sea verdadero, agregamos las clases.
  if (completar) {
    check1.classList.toggle('fas')
    check1.classList.toggle('completeIcon')
    check1.classList.toggle('far')
  }

  const tareatitulo = document.createElement('span')
        tareatitulo.classList.add('task')
        tareatitulo.innerText = valor
        tareaContenido.appendChild(check1)
        tareaContenido.appendChild(tareatitulo)
  
        tarea.appendChild(tareaContenido)
        tarea.appendChild(eliminarIcon(id))
  return tarea
}
