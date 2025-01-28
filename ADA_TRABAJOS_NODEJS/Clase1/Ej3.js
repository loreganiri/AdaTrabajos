const prompt = require("prompt-sync")({ sigint: true });
const numerillos = [];

for(i = 0; i < 10; i++){
    const numerillo = parseInt(prompt("Ingrese un numero: "));
    numerillos.push(numerillo);
}
console.log("Numerillos ingresados:");
console.log(numerillos);

numerillos.sort(function(a, b){return a - b});
console.log("Numerillos ordenados de menor a mayor:");
console.log(numerillos);