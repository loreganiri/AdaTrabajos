const prompt = require("prompt-sync")({ sigint: true });
let peso = prompt("Introduce tu peso en kilos: ");
let altura = prompt("Introduce tu altura en metros: ");
let imc = peso / (altura * altura);
console.log("Tu indice de masa corporal es: " + imc);
