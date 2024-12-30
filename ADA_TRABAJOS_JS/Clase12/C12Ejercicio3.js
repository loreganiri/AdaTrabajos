const prompt = require("prompt-sync")({ sigint: true });
let impares = 0;
let num = prompt("Introduzca un número: ");
for (let i = 0; i < num; i++) {
if (num % 2 == 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
    impares++;
}}
console.log("El número de impares es: " + impares);