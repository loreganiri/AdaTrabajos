
const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });
const estudiantes = require('./Ej4estudiantes');

for (let i = 0; i < estudiantes.length; i++) { 
    console.log(estudiantes[i].nombre);
}

console.log('Ingrese el nombre del estudiante a buscar:');
let nombreBuscado = prompt();
let encontrado = false;

for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nombre === nombreBuscado) {
        console.log(estudiantes[i]);
        encontrado = true;
        const promedio = (estudiantes[i].notas[0] + estudiantes[i].notas[1] + estudiantes[i].notas[2]) / 3;
        console.log('Promedio del alumno:', promedio);
        break;
    }
}

if (!encontrado) {
    console.log('Estudiante no encontrado.');   
}

//Agrega un nuevo estudiante
console.log('Ingrese el nombre del nuevo estudiante:');
let nuevoNombre = prompt();
console.log('Ingrese el apellido del nuevo estudiante:');
let nuevoApellido = prompt();
console.log('Ingrese la edad del nuevo estudiante:');
let nuevaEdad = prompt();
console.log('Ingrese el curso del nuevo estudiante:');
let nuevoCurso = prompt();
console.log('Ingrese las notas del nuevo estudiante:');
let nuevasNotas = [parseInt(prompt()), parseInt(prompt()), parseInt(prompt())];

const nuevoEstudiante = {
    nombre: nuevoNombre,
    apellido: nuevoApellido,
    edad: nuevaEdad,
    curso: nuevoCurso,
    notas: nuevasNotas
};

estudiantes.push(nuevoEstudiante);

fs.writeFileSync('estudiantes.json', JSON.stringify(estudiantes));
console.log('Nuevo estudiante agregado:', nuevoEstudiante);

