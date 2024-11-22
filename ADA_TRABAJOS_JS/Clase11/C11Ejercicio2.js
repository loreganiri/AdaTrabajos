const prompt = require("prompt-sync")({sigint:true});
let color = prompt("Ingrese un color entre Rojo, Verde y Amarillo: ");

switch (color) {
    case "Rojo":
        console.log("Alto, no puedes avanzar.");
        break;
    case "Verde":
        console.log("Avanza con seguridad.");
        break;
    case "Amarillo":
        console.log("Precaución, prepárate para avanzar.");
        break;
    default:
        console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
        break;
}