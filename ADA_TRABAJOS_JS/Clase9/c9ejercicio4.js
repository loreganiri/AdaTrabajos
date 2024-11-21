const promt = require("prompt-sync")({sigint:true});

let nombre = "Lorena";
let otro = promt("Introduce un nombre: ");
\
if (otro == nombre) {
    console.log("Los nombres son iguales");
} else {
    console.log("Los nombres son diferentes");
}