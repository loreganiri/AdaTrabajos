const prompt = require("prompt-sync")({sigint:true});
let num = prompt("Ingresa un numero: ");
parseInt(num);
prompt("El numero dado es: " + num + "\nPresiona enter para continuar...");

if (num % 2 == 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}
