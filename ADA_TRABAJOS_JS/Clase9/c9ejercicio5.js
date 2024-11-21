const promt = require("prompt-sync")({sigint:true});

let num1 = Number(promt("Introduce un número: "));
let num2 = Number(promt("Introduce un número: "));
let num3 = Number(promt("Introduce un número: "));

if (num1 > num2 && num1 > num3) {
    console.log("El primer numero es el mas alto" + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("El segundo numero es el mas alto" + num2);
} else {
    console.log("El tercer numero es el mas alto" + num3);
}
