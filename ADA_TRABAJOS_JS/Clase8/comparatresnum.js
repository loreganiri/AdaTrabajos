const prompt = require("prompt-sync")({ sigint: true });

let num1 =prompt("Ingrese un numero: ");
let num2 =prompt("Ingrese otro numero: ");
let num3 =prompt("Ingrese otro numero: ");
a=parseFloat(num1);
b=parseFloat(num2);
c=parseFloat(num3);

    if (a>b && a>c)
        console.log("El primer numero es el mayor");
    else
        if (b>a && b>c)
            console.log("El segundo numero es el mayor");
        else
            console.log("El tercer numero es el mayor");