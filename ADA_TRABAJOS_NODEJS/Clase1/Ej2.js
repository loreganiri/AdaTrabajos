const prompt = require("prompt-sync")({ sigint: true });
const baratos = [];
const caros = [];

function barabara(platillos){
for (let i in platillos){
    if(platillos[i]<200){
        baratos.push(i);
    }
    else{
        caros.push(i);
    }
}
return [baratos, caros];
}

let platillos = {
"Shyo Ramen": 180,
"Chow Mein": 210,
"Miso Soup": 115,
"Udon Noodles": 260,
"Tempura": 180,
"Ramen": 170,
}

console.log(barabara(platillos));
console.log("Platos Baratos:");
console.log(baratos);
console.log("Platos Caros:");
console.log(caros);



