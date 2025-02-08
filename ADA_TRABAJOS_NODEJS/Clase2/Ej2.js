const prompt = require("prompt-sync")({ sigint: true });
const fs = require('fs');

const alumno = {
    nombre: 'Lorena',
    apellido: 'Garcia',
    edad: '41',
    curso: 'Desarrollo Web',
    notas: [8,9,10]
};

let student=JSON.stringify(alumno); // convierte el objeto alumno en una cadena JSON
console.log(student); // muestra la cadena JSON
let eleve=JSON.parse(student);//convierte la cadena JSON en un objeto JavaScript
console.log(eleve); // muestra el objeto JavaScript con los datos del alumno
