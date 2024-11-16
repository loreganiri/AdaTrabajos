const prompt = require("prompt-sync")({ sigint: true });

let number = prompt("Ingrese un numero: ");

console.log(number);

if (number>0)
    console.log("El numero es positivo");
else
    if (number==0)
        console.log("El numero es cero");
    else
    console.log("El numero es negativo");



