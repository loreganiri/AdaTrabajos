const prompt = require("prompt-sync")({sigint:true});
const pi=3.1416;
let radio = parseFloat(prompt("Introduce el radio: "));
let area = pi*(radio*radio);
console.log("El area es: " + area);
let perimetro = 2*pi*radio;
console.log("El perimetro es: " + perimetro);