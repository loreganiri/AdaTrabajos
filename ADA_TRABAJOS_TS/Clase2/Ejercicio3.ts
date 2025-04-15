type Deportista = {
    nombre: string;
    deporte: string;
    energia: number;
};

const deportista: Deportista = {
    nombre: "Lorena Garcia",
    deporte: "Surf",
    energia: 100
};

function entrenar(deportista: Deportista, horas: number): void {
    console.log(`Inicio del entrenamiento - Energía: ${deportista.energia}`);
    
    
    deportista.energia -= horas * 5;
    
    
    console.log(`\nDespués de entrenar ${horas} hora(s):`);
    console.log(`Nombre: ${deportista.nombre}`);
    console.log(`Deporte: ${deportista.deporte}`);
    console.log(`Energía restante: ${deportista.energia}`);
}



console.log(deportista);

entrenar(deportista, 3); // Entrenar 3 horas

