
"use strict";

export let nombre: string = "Lorena Garcia"; 
let edad: number | undefined; // La edad puede ser number o undefined

function imprimirDatos(nombre: string, edad?: number): void {
    if (edad === undefined) {
        console.log("Edad no proporcionada");
    } else {
        console.log(`Nombre: ${nombre}, Edad: ${edad}`);
    }
}

//para probar sin valor en la edad
imprimirDatos(nombre, edad); 

//Ya le dimos un valor a la edad
edad = 30;
imprimirDatos(nombre, edad); 