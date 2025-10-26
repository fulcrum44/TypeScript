import { ConfigSubmarina } from "../config/ConfigSubmarina";
import { Mapa } from "./Mapa";

import * as readline from 'readline';

class Submarino {

    mapa!: Mapa;

    constructor() {}

    // public init(config: ConfigSubmarino): void {
    //     this.x = Math.floor(Math.random() * config.size);
    //     this.y = Math.floor(Math.random() * config.trail);
    // }

    public init(config: ConfigSubmarino): void {
        this.mapa = new Mapa(config.size);

        this.mapa.mostrarMapa();

        // this.x = Math.floor(Math.random() * config.size);
        // this.y = Math.floor(Math.random() * config.trail);
    }

    public static posicionInicialAleatorio(n: number): number[] {
        const coordenadas: number[] = [];

        coordenadas[0] = Math.floor(Math.random() * (n-1));
        coordenadas[1] = Math.floor(Math.random() * (n-1));

        return coordenadas;
    }

    public mover() {
        console.log("1. Arriba | 2. Abajo | 3. Izquierda | 4. Derecha");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
    }
    
}

export { Submarino };