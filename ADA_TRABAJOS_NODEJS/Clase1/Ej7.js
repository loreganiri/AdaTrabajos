const prompt = require("prompt-sync")({ sigint: true });

let palabras = [];
let numero = 0;

console.log("Ingrese las palabras: ");

for (let i = 0; i < 5; i++) {
    let palabra = prompt();
    palabras.push(palabra);
} // Estoy llenando la lista con las palabras que el usuario ingrese
console.log("Ingrese el numero: ");
numero = parseInt(prompt());// Pidiendo el numero de letras que busco que tengan las palabras

palabras.filter(palabra => palabra.length >= numero).forEach(palabra => console.log(palabra)); // Filtrando las palabras que tengan la cantidad de letras que el usuario ingreso y mostrandolas en consola