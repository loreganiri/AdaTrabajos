const prompt = require("prompt-sync")({ sigint: true });
let temperatura = prompt("Introduce la temperatura en grados Celsius: ");
let celsius = parseInt(temperatura);
let fahrenheit = celsius * 9 / 5 + 32;
console.log("La temperatura en Fahrenheit es: " + fahrenheit);
