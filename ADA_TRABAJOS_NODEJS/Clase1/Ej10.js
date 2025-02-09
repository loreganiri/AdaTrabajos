const prompt = require("prompt-sync")({ sigint: true });

const palabras = [];

console.log("Ingrese una palabra: ");
let palabra = prompt();

palabra = palabra.split("");
console.log("la palabra separada: ", palabra);

palabra = palabra.reverse().join("");
console.log("La palabra al reves: ", palabra);




