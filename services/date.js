export const uniqueDates = (tareas) => {
  const unique = []
  //  recorremos el arreglo con forEach
  tareas.forEach(tarea => {
    if( !unique.includes(tarea.formatoFecha) ){
      unique.push(tarea.formatoFecha)
    }
  });
  return unique
}

export const fechasOrdenadas = (dates) => {
  // recibe arreglo de fechas
  return dates.sort((a,b) => {
  // ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // Ordenar fechas
  const primerFecha = moment (a, 'DD/MM/YYYY')
  const segundaFecha = moment (b, 'DD/MM/YYYY')
    return primerFecha - segundaFecha
  })
}