const checkCompletado = (id) => {
  const i = document.createElement('i')
  i.classList.add('far', 'fa-check-square', 'icon')
  i.addEventListener('click', (evento) => tareaCompletada(evento, id))
  return i
}

// ! Immediately Invoked Function Expression (IIFE)
const tareaCompletada = (event, id) => {
  // Si existe o no la clase
  const elemento = event.target
        elemento.classList.toggle('fas')
        elemento.classList.toggle('completeIcon')
        elemento.classList.toggle('far')
  // ? Posición dentro del arreglo
  const tareas = JSON.parse(localStorage.getItem('tareas'))
  const index = tareas.findIndex(item => item.id === id)
  tareas[index]['completar'] = !tareas[index]['completar'];
  localStorage.setItem('tareas', JSON.stringify(tareas))
}

export default checkCompletado