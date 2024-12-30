const prompt = require("prompt-sync")({ sigint: true });
let password = "1234";
let num = 0;
do {
num = prompt("Introduzca la contraseña: ");

} while (num != password);