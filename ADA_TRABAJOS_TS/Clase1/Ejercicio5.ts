"use strict";

export let nombre: string | null = "Lorena Garcia"; 

console.log(`Mi nombre es ${nombre}`);

nombre = null;
console.log(`Mi nombre es ${nombre},  Cuando usamos null a diferencia de unidefined no nos da error, por que undefined se usa para valores que aun no han sido asignados pero la variable si fue declarada, y null es para cuando se asigna valor nulo a proposito.`); 