const prompt = require("prompt-sync")({ sigint: true });

let primerNumero = prompt("Introduce el primer número: ");
let segundoNumero = prompt("Introduce el segundo número: ");

console.log("El primer número es: " + primerNumero);
console.log("El segundo número es: " + segundoNumero);

console.log("Ahora intercambiamos los números");

let aux = primerNumero;
primerNumero = segundoNumero;
segundoNumero = aux;

console.log("El primer número es: " + primerNumero);
console.log("El segundo número es: " + segundoNumero);