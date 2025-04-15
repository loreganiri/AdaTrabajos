type Libro = {
    titulo: string;
    autor: string;
}


function listarLibros(libros: Libro[]): void {
        for (let i = 0; i < libros.length; i++) {
            console.log(libros[i].titulo, libros[i].autor);
            
        }
    }

let libros: Libro[] = [
    { titulo: "Libro 1", autor: "Autor 1"},
    { titulo: "Libro 2", autor: "Autor 2"},
    { titulo: "Libro 3", autor: "Autor 3"}
];

listarLibros(libros);