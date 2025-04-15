function crealibro(titulo: string, autor: string, paginas: number): object {
    return {
        titulo,
        autor,
        paginas
    };
}

console.log (crealibro("Habitos atomicos", "James Clear", 320));
console.log (crealibro("The mountain is you", "Biranna West", 248));