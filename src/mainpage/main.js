// Clase Tarea
class Tarea {
    constructor(texto) {
        this.texto = texto;
        this.completada = false;
    }

    marcarComoCompletada() {
        this.completada = true;
    }

    desmarcarComoCompletada() {
        this.completada = false;
    }
}

// Clase Lista de Tareas
class ListaTareas {
    constructor(nombre) {
        this.nombre = nombre;
        this.tareas = [];
    }

    agregarTarea(texto) {
        const nuevaTarea = new Tarea(texto);
        this.tareas.push(nuevaTarea);
    }
}

// Creación de las Variables
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const taskListSelect = document.getElementById('taskListSelect');
const addListButton = document.getElementById('addList');
const listasTareas = {
    default: new ListaTareas('Lista Principal')
};

// Función para agregar una tarea
function agregarTarea() {
    const tareaTexto = taskInput.value.trim();
    if (tareaTexto !== '') {
        const listaSeleccionada = taskListSelect.value;
        const lista = listasTareas[listaSeleccionada] || listasTareas['default'];
        lista.agregarTarea(tareaTexto);
        actualizarVista(listaSeleccionada);
        taskInput.value = '';
    }
}

// Función para marcar o desmarcar una tarea como completada
function marcarTarea(event) {
    const tareaIndex = event.target.getAttribute('data-index');
    const listaSeleccionada = taskListSelect.value;
    const lista = listasTareas[listaSeleccionada] || listasTareas['default'];
    const tarea = lista.tareas[tareaIndex];

    if (tarea) {
        tarea.completada = !tarea.completada;
        actualizarVista(listaSeleccionada);
    }
}

// Función para actualizar la vista de tareas
function actualizarVista(listaSeleccionada) {
    const lista = listasTareas[listaSeleccionada] || listasTareas['default'];
    const listaHtml = taskList;
    listaHtml.innerHTML = '';

    for (let i = 0; i < lista.tareas.length; i++) {
        const tarea = lista.tareas[i];
        const tareaHtml = document.createElement('li');
        tareaHtml.textContent = tarea.texto;
        tareaHtml.setAttribute('data-index', i);

        if (tarea.completada) {
            tareaHtml.classList.add('completed');
        }

        tareaHtml.addEventListener('click', marcarTarea);
        listaHtml.appendChild(tareaHtml);
    }
}

// Función para agregar una lista de tareas
function agregarLista() {
    const nombreLista = prompt('Ingresa el nombre de la nueva lista');
    if (nombreLista) {
        listasTareas[nombreLista] = new ListaTareas(nombreLista);
        actualizarListasTareas();
    }
}

// Función para actualizar la lista de selección
function actualizarListasTareas() {
    taskListSelect.innerHTML = '';
    for (const nombreLista in listasTareas) {
        if (listasTareas.hasOwnProperty(nombreLista)) {
            const option = document.createElement('option');
            option.value = nombreLista;
            option.textContent = nombreLista;
            taskListSelect.appendChild(option);
        }
    }
}

// Event Listeners
addTaskButton.addEventListener('click', agregarTarea);
addListButton.addEventListener('click', agregarLista);
taskListSelect.addEventListener('change', () => {
    const listaSeleccionada = taskListSelect.value;
    actualizarVista(listaSeleccionada);
});

// Actualizar la vista inicial
actualizarVista('default');
actualizarListasTareas();
