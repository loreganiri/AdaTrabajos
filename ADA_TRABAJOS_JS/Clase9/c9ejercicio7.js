const prompt = require("prompt-sync")({sigint:true});
let peso = parseFloat(prompt("Introduce tu peso en kg: "));
libras = peso * 2.2046;
console.log("Tu peso es: " + libras);