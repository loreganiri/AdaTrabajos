"use strict"; 
console.log("Ejercicio 3");
let yo = {nombre: 'Lorena Garcia'}; //<-- this is an object
let tpl = `My name is ${yo.nombre}.`; //<-- this is called a template literal
let junto = "Mi nombre es" + yo.nombre +"."; //<-- this is a concatenation

console.log(tpl); // printing the template
console.log(junto); // printing the concatenation
