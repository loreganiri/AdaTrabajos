function creaPersona(nombre: string, edad: number, pais: string): { nombre: string, edad: number, pais: string } {
    return {
        nombre,
        edad,
        pais
    };
}
//Opcion 1
console.log(creaPersona("Lorena", 41, "Mexico"));
// Opcion 2
let persona1 = creaPersona("Lorena", 41, "Mexico");
console.log(persona1);