import { agregarTarea } from "./components/agregarTarea.js";
import { desplegarTarea } from "./components/LeerTarea.js";

const btn = document.querySelector('[data-from-btn]')

btn.addEventListener('click', agregarTarea);

desplegarTarea()