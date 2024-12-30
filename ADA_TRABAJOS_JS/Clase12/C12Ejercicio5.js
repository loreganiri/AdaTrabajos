const prompt = require("prompt-sync")({ sigint: true });
let nombres = [];

for (let i = 0; i < 5; i++) {
    nombres.push(prompt("Introduzca un nombre: "));
}
let comparar = prompt("Introduzca el nombre a comparar: ");
let encontrado = false;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] == comparar) {
        encontrado = true;
        break;
    }
}
if (encontrado) {
    console.log("El nombre se encuentra en la lista");
} else {
    console.log("El nombre no se encuentra en la lista");
}