function  generica<T>(elemento: T): T {
    return elemento;
}

const numero = generica<number>(10);
const texto = generica<string>("Hola");
const booleano = generica<boolean>(true);

console.log(numero);
console.log(texto);
console.log(booleano);