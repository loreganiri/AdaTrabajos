require('dotenv').config();  
const saludo = process.env.SALUDO || 'Hola';  
const nombre = process.argv[2] || 'Lorena';
console.log(`${saludo} ${nombre}`);