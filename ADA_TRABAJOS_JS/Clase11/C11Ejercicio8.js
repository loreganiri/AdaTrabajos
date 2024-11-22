const prompt = require("prompt-sync")({sigint:true});
let num = prompt("Ingresa un numero: ");
parseInt(num);
let multiplo = 1;

for (let i = 1; multiplo < 100; i++) {
       multiplo = num * i;
        console.log(multiplo);

}