const prompt = require("prompt-sync")({ sigint: true });
let nombre = prompt("Introduce tu nombre: ");
let edad = prompt("Introduce tu edad: ");
let peso = prompt("Introduce tu peso en kilos: ");

console.log("Hola " + nombre + " tu edad: " + edad + " y tu peso: " + peso + "kg");
