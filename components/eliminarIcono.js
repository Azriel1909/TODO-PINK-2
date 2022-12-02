const eliminarIcon = () => {
  const i = document.createElement('i')
  i.classList.add('fas','fa-trash-alt','trashIcon','icon')
  i.addEventListener('click',borrarTarea )
  return i
}

const borrarTarea = (event) => {
  const cartaPadre = event.target.parentElement
  cartaPadre.remove()
}

export default eliminarIcon