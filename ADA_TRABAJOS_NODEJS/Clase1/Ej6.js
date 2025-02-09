const prompt = require("prompt-sync")({ sigint: true });

let grades = [];
let average = 0;

function promedio(grades) {
    for (let i = 0; i < grades.length; i++) {
        average += grades[i];
    }
    return average / grades.length;
}

console.log("Ingrese las calificaciones: ");
for (let i = 0; i < 5; i++) {
    let grade = parseInt(prompt());
    grades.push(grade);
}

console.log("El promedio es: " + promedio(grades));

