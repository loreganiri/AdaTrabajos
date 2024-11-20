const prompt = require("prompt-sync")({ sigint: true });

let x = 5;
let y = 11;

if (x > 10 && y > 10) {
    console.log("x es mayor que 10 y y es mayor que 10");
}
else {
    console.log("Uno de los numeros no es mayor a 10");
}

