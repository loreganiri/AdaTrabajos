let Chica ={
    nombre: "Lorena",
    edad:41,
    ciudad: "Ensenada",
}

for (const key in Chica) {
    
        console.log(`${key}: ${Chica[key as keyof typeof Chica]}`);
}