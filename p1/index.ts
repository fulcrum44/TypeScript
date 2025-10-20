const prompt = require('prompt-sync')();
console.log("Suma de números.");
const numero1 = prompt('Número 1: ');
const numero2 = prompt('Número 2: ');
let suma = parseFloat(numero1) + parseFloat(numero2);
console.log(`Hola, la suma final es ${suma}!`);
console.log("La suma de " + numero1 + " + " + numero2 + " = "+ suma);