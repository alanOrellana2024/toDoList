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

