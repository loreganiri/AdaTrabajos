const prompt = require("prompt-sync")({ sigint: true });

let num1 =prompt("Ingrese un numero: ");
let num2 =prompt("Ingrese otro numero: ");
a=parseFloat(num1);
b=parseFloat(num2);
let suma=a+b;
console.log(suma);