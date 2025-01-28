const prompt = require("prompt-sync")({ sigint: true });

const edades = [];
contador = 0;

function entran(edades) {
    
    for (let i = 0; i < edades.length; i++) {    
        if (edades[i] >= 12 && edades[i] <= 60) {
            console.log("La persona de " + edades[i] + " años puede entrar");
            contador++;
        } else {
            console.log("La persona de " + edades[i] + " años no puede entrar");
        }

    }
console.log("Cantidad de personas que pueden entrar: " + contador);
}

for (let i = 0; i < 10; i++) {
const edad = parseInt(prompt("Ingrese una edad: "));
edades.push(edad);  
console.log("Edad ingresada correctamente");

}
console.log("Edades ingresadas:");
for (let i = 0; i < edades.length; i++) {
    console.log(edades[i]);
}
entran(edades);