const prompt = require("prompt-sync")({sigint:true});

let num = prompt("Ingresa un numero: ");
parseInt(num);

for (let i = 1; i <= 10; i++) {
  let  mult = num * i;
    console.log(i + "*" + num + " es: " + mult);
}