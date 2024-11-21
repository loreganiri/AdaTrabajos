const prompt = require("prompt-sync")({sigint:true});
let lado1 = parseFloat(prompt("Introduce el lado 1: "));
let lado2 = parseFloat(prompt("Introduce el lado 2: "));
let lado3 = parseFloat(prompt("Introduce el lado 3: "));

if (lado1 == lado2 && lado2 == lado3) {
    console.log("El triangulo es equilatero");
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log("El triangulo es isosceles");
} else {
    console.log("El triangulo es escaleno");
}