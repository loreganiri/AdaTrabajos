const prompt = require("prompt-sync")({ sigint: true });
let primerNumero = 5;
let segundoNumero = 10;

Suma = primerNumero + segundoNumero;
Resta = primerNumero - segundoNumero;
Multiplicacion = primerNumero * segundoNumero;
Division = primerNumero / segundoNumero;
console.log("La suma es: " + Suma);
console.log("La resta es: " + Resta);
console.log("La multiplicacion es: " + Multiplicacion);
console.log("La division es: " + Division);