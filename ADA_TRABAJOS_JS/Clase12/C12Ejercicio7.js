const prompt = require("prompt-sync")({ sigint: true });
let matriz = 
[[1,2,3,4,5],
[6,7,8,9,10],
[11,12,13,14,15],
[16,17,18,19,20],
[21,22,23,24,25]];
let suma = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
        suma += matriz[i][j];    
}}
console.log("La suma de todos los números es: "+suma)
