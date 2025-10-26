import { Casilla } from "./Casilla";
import { Submarino } from "./Submarino";

class Mapa {
    inicioMapa: Casilla | null = null; // En una lista enlazada simple o doble, al menos hay que almacenar el primer elemento o el último. El mapa es una doble lista enlazada en dos dimensiones. La esquina superior-izquierda del tablero nos sirve como primer elemento del mapa-tablero

    numeroFilas: number;
    numeroColumnas: number;

    casillaSubmarino: Casilla | null = null;

    constructor(size: number) {
        this.numeroFilas = size;
        this.numeroColumnas = size;
        this.generarMapa(Submarino.posicionInicialAleatorio(size));
    }

    // La construcción del mapa la hacemos de arriba a abajo y de izquierda a derecha
    public generarMapa(posicionSubmarino: number[]): void {
        // Estas dos variables funcionan igual que inicioMapa, solo que ahora estamos separando la lógica de las filas y columnas del tablero.
        let inicioFila: Casilla | null = null;
        let filaSuperior: Casilla | null = null; // En la primera fila las casillas no tienen otra casilla por arriba, por lo tanto definimos que es null

        for (let i=0; i<this.numeroFilas; i++) {
            let casillaActual: Casilla | null = null;
            let columnaIzquierda: Casilla | null = null; // La primera casilla no tiene otra casilla a si izquierda, por lo tanto definimos que es null

            for (let j=0; j<this.numeroColumnas; j++) {
                casillaActual = new Casilla(0);

                // El inicioMapa es solamente una referencia a la primera casilla del mapa, a partir de la cual empezamos a construir, iterar o cualquier acción que implique recorrer el mapa entero.
                if (i == 0 && j == 0) {
                    this.inicioMapa = casillaActual;
                    inicioFila = casillaActual;
                } else if (i != 0 && j == 0) inicioFila = casillaActual; // Referencia a la primera casilla de la fila. Su uso es para luego definir el inicio de la fila anterior de la fila siguiente que generemos
                
                // Cambiamos el estado de la casilla donde hemos definido aleatoriamente la posición del submarino
                if (this.casillaSubmarino == null && i === posicionSubmarino[0] && j === posicionSubmarino[1]) {
                    this.casillaSubmarino = casillaActual;
                    casillaActual.estado = 'X';
                }
                
                if (columnaIzquierda != null) { // Sucesivamente definimos la casilla de la derecha de la casilla anterior y la casilla izquierda de la casilla actual. Omitimos la primera casilla al no haber nada a la izquierda.
                    columnaIzquierda.derecha = casillaActual;
                    casillaActual.izquierda = columnaIzquierda;
                }

                columnaIzquierda = casillaActual; // Conforme vayamos avanzando en la iteración, la casilla actual será la casilla de la izquieda la siguiente casilla, que será la próxima casillaActual
                
                if (filaSuperior != null) { // Mismo funcionamiento que con las filas pero ahora con las columnas
                    filaSuperior.abajo = casillaActual;
                    casillaActual.arriba = filaSuperior;
                    filaSuperior = casillaActual.arriba.derecha; // Tenemos que desplazar a la derecha la referencia que tenemos con la fila superior al mismo ritmo que nos movemos por la fila actual.
                }

            }
            filaSuperior = inicioFila; // Asignamos como fila superior la variable inicioFila, que corresponde con la fila con la que hemos estado trabajando en esta iteración. Esta será la fila superior de la siguiente.
        }
    }

    public mostrarMapa(): void {
        let coordenadaFila: Casilla | null = this.inicioMapa;

        while (coordenadaFila != null) {
            let coordenadaColumna: Casilla | null = coordenadaFila;

            while (coordenadaColumna != null) {
                // console.log(coordenadaColumna.estado);

                // Al parecer el process.stdout.write() solo acepta parametros de tipo String. He tenido que escribir en la terminal npm i --save-dev @types/node para que reconozca el process
                // Con el console.log se me estaban imprimiendo las casillas de una fila con saltos de línea y obviamente eso erá un problema. Mirando en diferentes sitios lo que he encontrado en general ha sido esto.
                process.stdout.write(String(coordenadaColumna.estado + " "));
                // contador++;

                coordenadaColumna = coordenadaColumna.derecha;
            }
            coordenadaFila = coordenadaFila.abajo;
            console.log(); // Salto de linea
        }
    }

}

export {Mapa}