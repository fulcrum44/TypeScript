class Casilla {
    estado: number | string;

    arriba: Casilla | null;
    abajo: Casilla | null;
    izquierda: Casilla | null;
    derecha: Casilla | null;

    constructor(estado: number) {
        this.estado = estado;
        this.arriba = null;
        this.abajo = null;
        this.izquierda = null;
        this.derecha = null;
    }

    

}

export { Casilla }