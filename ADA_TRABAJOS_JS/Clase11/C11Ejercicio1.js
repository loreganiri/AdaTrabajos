const prompt = require("prompt-sync")({sigint:true});
let num = prompt(parseInt("Ingrese un número: "));

if (num > 0) {
    console.log("El número es positivo");
} else if (num < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}