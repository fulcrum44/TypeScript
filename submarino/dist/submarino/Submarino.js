"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submarino = void 0;
const Mapa_1 = require("./Mapa");
class Submarino {
    casillaSubmarino;
    mapa;
    constructor() {
        this.casillaSubmarino = null;
    }
    // public init(config: ConfigSubmarino): void {
    //     this.x = Math.floor(Math.random() * config.size);
    //     this.y = Math.floor(Math.random() * config.trail);
    // }
    init(config) {
        this.mapa = new Mapa_1.Mapa(config.size);
        this.mapa.mostrarMapa();
        // this.x = Math.floor(Math.random() * config.size);
        // this.y = Math.floor(Math.random() * config.trail);
    }
    static posicionInicialAleatorio(n) {
        const coordenadas = [];
        coordenadas[0] = Math.floor(Math.random() * (n - 1));
        coordenadas[1] = Math.floor(Math.random() * (n - 1));
        return coordenadas;
    }
}
exports.Submarino = Submarino;
