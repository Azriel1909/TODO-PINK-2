import { agregarTarea } from "./components/agregarTarea.js";
import { leerTarea } from "./components/LeerTarea.js";

const btn = document.querySelector('[data-from-btn]')

btn.addEventListener('click', agregarTarea);

leerTarea()