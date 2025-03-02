const net = require('net'); //importando el módulo net

function conectar() {
    

const client = net.createConnection({ //creando la conexión
    host: 'localhost', //host
    port: 5000 //puerto 5000
});

client.on('data', (data) => {//cuando se reciban datos
    console.log(data.toString());//mostrando los datos
}); 

client.on('close', () => {//cuando se cierra la conexión
    setTimeout((conectar(), 3000));//reconectando en 3 segundos) 
});

client.on('error', (err) => {//cuando se produce un error
    console.error('Error:', err.message);//mostrando el error
});

}
conectar();
