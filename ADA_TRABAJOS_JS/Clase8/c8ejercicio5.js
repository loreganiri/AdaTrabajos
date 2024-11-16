const prompt = require("prompt-sync")({ sigint: true });
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
console.log("Hola " + nombre + " " + apellido);
