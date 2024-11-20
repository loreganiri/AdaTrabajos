const prompt = require("prompt-sync")({ sigint: true });
const EdadMinima = 18;
const EdadMaxima = 99;

let edad = prompt("Introduce tu edad: ");
Age = parseInt(edad);

if (Age < EdadMinima || Age > EdadMaxima) 
    {
    console.log("Edad incorrecta");
}
