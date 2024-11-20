const prompt = require("prompt-sync")({ sigint: true });
let precio = prompt("Introduce el precio del producto: ");
let descuento = prompt("Introduce el descuento del producto: ");
let precioFinal = precio - (precio * descuento / 100);
console.log("El precio final es: " + precioFinal);
