const prompt = require("prompt-sync")({ sigint: true });
let num1 =prompt("Ingrese un numero: ");
let num2 =prompt("Ingrese otro numero: ");
a=parseFloat(num1);
b=parseFloat(num2);
let operador=prompt("Ingrese el operador: ");
if (operador=="+")
    console.log(a+b);
else
    if (operador=="-")
        console.log(a-b);
    else
        if (operador=="*")
            console.log(a*b);
        else
            if (operador=="/")
                console.log(a/b);

