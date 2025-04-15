type coche = {
    marca: string;
    modelo: string;
    encendido: boolean;
}
let miCoche: coche = {
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false
};

console.log(miCoche);
function encenderCoche(coche: coche): coche {
    coche.encendido = true;
    return coche;
}
miCoche = encenderCoche(miCoche);

console.log(miCoche);