function saludar(nombre: string, saludo?: string): string {

    const mensajeSaludo = saludo || "Hola";
    const mensajeCompleto = `${mensajeSaludo}, ${nombre}!`;
    
 
    console.log(mensajeCompleto);
    

    return mensajeCompleto;
}

saludar("Lorena");
saludar("Lorena", "Que tal?");