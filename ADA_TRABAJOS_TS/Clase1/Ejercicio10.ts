type Pastel = {
    sabor: string;
    relleno: string;
    decoracion: string;
    precio: number;
}

const pastel1: Pastel = {
    sabor: "chocolate",
    relleno: "chocolate",
    decoracion: "flores",
    precio: 80
}

console.log("El sabor del pastel es: " + pastel1.sabor);
console.log("El relleno del pastel es: " + pastel1.relleno);
console.log("La decoracion del pastel es: " + pastel1.decoracion);
console.log("El precio del pastel es: " + pastel1.precio);

console.log("Imprmimos el objeto completo", pastel1);

