const prompt = require("prompt-sync")({ sigint: true });
const fs = require('fs');
const filePath = './libros.json';

function AgregarLibro() {
    const titulo = prompt("Ingrese el título del libro: ");
    const autor = prompt("Ingrese el autor del libro: ");
    const precio = parseFloat(prompt("Ingrese el precio del libro: "));
    const libro = { titulo, autor, precio };
    const libros = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    libros.push(libro);
    fs.writeFileSync(filePath, JSON.stringify(libros, null, 2));
    console.log("Libro agregado correctamente.");
}

function MostrarLibros() {

    if (!fs.existsSync(filePath)) {
        console.log("No se encontraron libros.");
        return;
    }
    const libros = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    console.log("Libros disponibles:");
    libros.forEach((libro, index) => {
        console.log(`${index + 1}. Título: ${libro.titulo}, Autor: ${libro.autor}, Precio: $${libro.precio}`);
    });
}


while (true) {
    console.log("Menú:");
    console.log("1. Agregar libro");
    console.log("2. Mostrar libros");
    console.log("3. Salir");
    const opcion = prompt("Ingrese una opción: ");
    switch (opcion) {
        case "1":
            AgregarLibro();
            break;
        case "2":
            MostrarLibros();
            break;
        case "3":
            console.log("¡Hasta luego!");
            process.exit(0);
        default:
            console.log("Opción inválida. Por favor, ingrese una opción válida.");
    }
}