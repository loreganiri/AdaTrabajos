const prompt = require("prompt-sync")({ sigint: true });
const fs = require('fs');
libro = {
    autor: 'J. K. Rowling',
    titulo: 'Harry Potter y la piedra filosofal',
    anio: 1997,
    genero: 'Fantasia',
}

console.log("Titulo:",libro.titulo,"Autor:",libro.autor);//Muestra en consola titulo y autor
let newyear = prompt(console.log("Cambiale el año de tu libro:")); //Pide al usuario que cambie el año del libro
libro.anio = newyear;//Cambia el año del libro
console.log("Aqui cambiado:",libro.anio);//Monstrando nuevo nombre cambiado
libro.paginas=200;//Agrega la propiedad paginas con el valor 200

console.log("Objeto actualizado", libro);//Muestra el objeto actualizado
