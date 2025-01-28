const prompt = require("prompt-sync")({ sigint: true });
let vocales = "aeiouAEIOU";
let cuantasVocales = 0;
function contarVocales(str) {
    return str.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;
  }

console.log("Escribe tu oracion corta" );
let oracion = prompt();
console.log("La oracion es: " + oracion);
console.log("La cantidad de vocales es: " + contarVocales(oracion));





