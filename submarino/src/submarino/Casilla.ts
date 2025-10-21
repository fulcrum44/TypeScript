class Casilla {
    estado: number;

    arriba: Casilla | null;
    abajo: Casilla | null;
    izquierda: Casilla | null;
    derecha: Casilla | null;

    constructor() {
        this.estado = 0;
        this.arriba = null;
        this.abajo = null;
        this.izquierda = null;
        this.derecha = null;
    }

}