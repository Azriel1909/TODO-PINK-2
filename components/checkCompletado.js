const checkCompletado = () => {
  const i = document.createElement('i')
  i.classList.add('far', 'fa-check-square', 'icon')
  i.addEventListener('click', tareaCompletada )
  return i
}

// ! Immediately Invoked Function Expression (IIFE)
const tareaCompletada = (event) => {
  const elemento = event.target 
  // Si existe o no la clase
  elemento.classList.toggle('fas')
  elemento.classList.toggle('completeIcon')
  elemento.classList.toggle('far')
}

export default checkCompletado