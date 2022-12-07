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