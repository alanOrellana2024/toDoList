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

// Variables
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const taskListSelect = document.getElementById('taskListSelect');
const addListButton = document.getElementById('addList');
const listasTareas = {
    default: new ListaTareas('Lista Principal')
};
