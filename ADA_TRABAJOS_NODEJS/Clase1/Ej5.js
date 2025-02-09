const prompt = require("prompt-sync")({ sigint: true });
let Iniciales = [];
function encuentraIniciales(str) {
str = str.split(" ");

for (let i = 0; i < str.length; i++) {
Iniciales.push(str[i][0]);
}
return Iniciales.join("");
}

console.log("Escribe tu nombre completo" );
let nombre = prompt();
console.log("El nombre es: " + nombre);
console.log("Las iniciales son: " + encuentraIniciales(nombre));



