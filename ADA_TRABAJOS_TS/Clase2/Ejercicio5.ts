function sumatodos(numeros: number[]): number {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = sumatodos(numeros);
console.log("Números:", numeros);
console.log("La suma de todos los números es:", resultado);