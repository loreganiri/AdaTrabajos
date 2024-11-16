const prompt = require("prompt-sync")({ sigint: true });

let num1 =prompt("Ingrese un numero: ");
a=parseFloat(num1);
if (a%2==0)
    console.log("El numero es par");
else
    console.log("El numero es impar");
