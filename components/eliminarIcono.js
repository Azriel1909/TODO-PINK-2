import { desplegarTarea } from "./LeerTarea.js"

const eliminarIcon = (id) => {
  const i = document.createElement('i')
  i.classList.add('fas','fa-trash-alt','trashIcon','icon')
  i.addEventListener('click',() => borrarTarea(id))
  return i
}

const borrarTarea = (id) => {
  const li = document.querySelector('[data-list]')
  const tareas = JSON.parse(localStorage.getItem('tareas'))
  const index = tareas.findIndex((item) => item.id === id)
  // ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  tareas.splice(index, 1)
  li.innerHTML = ''
  localStorage.setItem('tareas', JSON.stringify(tareas))
  desplegarTarea()
}

export default eliminarIcon