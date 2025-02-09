const prompt = require("prompt-sync")({ sigint: true });

console.log("Ingrese una oracion: ");
let oracion = prompt();

console.log("ingresa la letra que quieres contar repetida: ");
let letra = prompt();

let cuantasVeces = 0;

contarLetras(oracion, letra);

function contarLetras(oracion, letra) {
    for (let i = 0; i < oracion.length; i++) {
        if (oracion[i] === letra) {
            cuantasVeces++;
        }
    }
    return cuantasVeces;
}
console.log("La letra " + letra + " aparece " + cuantasVeces + " veces en la oracion.");