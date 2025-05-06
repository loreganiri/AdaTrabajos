function filtrarElementos<T> (arreglo: T[]): string[] {
    const resultado: string[] = [];
    for (const elemento of arreglo) {
        if (typeof elemento === "string") {
            resultado.push(elemento);
        }
    }
    return resultado;
}

const datos = ["Lorena", 41, "Estudiante de programacion en ADA"];
const elementosFiltrados = filtrarElementos(datos);
console.log(elementosFiltrados);