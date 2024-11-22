
const prompt = require("prompt-sync")({sigint:true});
let x = Math.floor(Math.random() * 11);
console.log(x);
console.log("Jueguemos a adivinar el numero");
console.log("Tienes 3 oportunidades");


for (let i = 1; i <= 3; i++) {
let num = prompt("Ingresa un numero: ");
parseInt(num);
if (num == x) {
    console.log("Has ganado");
    break;
}
}
console.log("El numero era: " + x);

