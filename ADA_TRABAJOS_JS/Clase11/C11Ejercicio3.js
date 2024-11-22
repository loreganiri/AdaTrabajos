const prompt = require("prompt-sync")({sigint:true});
let num = prompt("Ingresa un numero: ");
parseInt(num);
prompt("El numero dado es: " + num + "\nPresiona enter para continuar...");

for (let i = 1; i <= num; i++) 
{
    console.log("Vuelta" + i);
}

