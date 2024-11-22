const prompt = require("prompt-sync")({sigint:true});
let inicio = prompt("Ingresa un numero de inicio: ");
parseInt(inicio);
let fin = prompt("Ingresa un numero de finalizacion: ");
parseInt(fin);
if (inicio > fin) {
    console.log("El numero de inicio debe ser menor que el de finalizacion");
}
else
{
for (let i = inicio; i <= fin; i++) {
    if (i % 2 == 0) {
        console.log(i + " es par");
    }
}
}