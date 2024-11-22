const prompt = require("prompt-sync")({sigint:true});
let num = prompt("Ingresa un numero: ");
parseInt(num);
let num2 = prompt("Ingresa un numero: ");
parseInt(num2);

console.log("Elige una operacion:\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division");

switch (num) {
    case 1:
        let suma = num + num2;
        console.log("La suma es: " + suma);
        break;
    case 2:
        let resta = num - num2;
        console.log("La resta es: " + resta);
        break;
    case 3:
        let mult = num * num2;
        console.log("La multiplicacion es: " + mult);
        break;
    case 4:
        let div = num / num2;
        console.log("La division es: " + div);
        break;
    default:
        console.log("El numero es 0");
        break;
}