const prompt = require("prompt-sync")({ sigint: true });

let number = prompt("Ingrese un numero: ");

console.log(number*2);