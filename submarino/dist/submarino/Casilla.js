"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casilla = void 0;
class Casilla {
    estado;
    arriba;
    abajo;
    izquierda;
    derecha;
    constructor(estado) {
        this.estado = estado;
        this.arriba = null;
        this.abajo = null;
        this.izquierda = null;
        this.derecha = null;
    }
}
exports.Casilla = Casilla;
