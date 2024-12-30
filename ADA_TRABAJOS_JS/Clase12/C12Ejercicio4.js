const prompt = require("prompt-sync")({ sigint: true });

let notas = [];

let num = prompt("Introduzca la cantidad de alumnos a capturar: ");
for (let i = 0; i < num; i++) {
    notas.push(prompt("Introduzca una nota: "));
} 

    
for (let j = 0; j < notas.length; j++) {
        console.log("La nota es: " + j+1 + ".- " + notas[j]);
    }
