const prompt = require("prompt-sync")({ sigint: true });

let numeros = [];
let sinRepetir = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Ingrese un número: "));
    numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {
    if (!sinRepetir.includes(numeros[i])) {
        sinRepetir.push(numeros[i]);
    }
}
console.log("Los números sin repetir son: " + sinRepetir);