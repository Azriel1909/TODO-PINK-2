export default (date) => {
  // Implementación al DOM
  const elementoFecha = document.createElement('li')
  elementoFecha.classList.add('date')
  elementoFecha.innerHTML = date
  return elementoFecha
}