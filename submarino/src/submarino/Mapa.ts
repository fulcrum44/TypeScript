class Mapa {
    fila: DireccionHorizontal | null;
    columna: DireccionVertical | null;

    numeroFilas: number;
    numeroColumnas: number;

    casillaActual: Casilla;

    constructor(filas: number, columnas: number) {
        this.fila = null;
        this.columna = null;
        this.numeroFilas = filas;
        this.numeroColumnas = columnas;
    }

    public generacionMapa() {
        let casilla: Casilla;
        let casillaIzquierda: Casilla | null = null;
        let casillaArriba: Casilla[] = [];

        for (let i=0; i<this.numeroFilas; i++) {
            let fila: DireccionHorizontal = new DireccionHorizontal();
            for (let j=0; j<this.numeroColumnas; j++) {
                casilla = new Casilla();
                
                
                if (i == 0) {
                    let columna: DireccionVertical = new DireccionVertical();

                    if (j == 0) {
                        fila.inicio = casilla;
                        columna.inicio = casilla;
                    } else if (j == this.numeroColumnas-1) {
                        casilla.izquierda = casillaIzquierda;
                        casillaIzquierda.derecha = casilla;
                        fila.final = casilla;
                    }
                    else {
                        casilla.izquierda = casillaIzquierda;
                        casillaIzquierda.derecha = casilla;
                    }
                } else if (i == this.numeroFilas-1) {
                    casilla.arriba = casillaArriba[j];
                    casillaArriba[j].abajo = casilla;
                    this.columna.final = casilla;
                } else {
                    if (j == 0) {
                        casilla.arriba = casillaArriba[j];
                        casillaArriba[j].abajo = casilla;
                    } else if (j == this.numeroColumnas-1) {
                        casilla.arriba = casillaArriba[j];
                        casillaArriba[j].abajo = casilla;
                        casilla.izquierda = casillaIzquierda;
                        casillaIzquierda.derecha = casilla;
                        fila.final = casilla;
                    } else {
                        casilla.arriba = casillaArriba[j];
                        casillaArriba[j].abajo = casilla;

                        casilla.izquierda = casillaIzquierda;
                        casillaIzquierda.derecha = casilla;
                    }
                }
                
                casillaArriba[j] = casilla;
                casillaIzquierda = casilla;



            }
        }
    }

    public mostrarMapa() {
        let casilla: Casilla;

        for (let i=0; i<this.numeroFilas; i++) {
            
            for (let j=0; j<this.numeroColumnas; j++) {
                print()
            }
        }
    }

}