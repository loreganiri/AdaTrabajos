const net = require('net');
const readline = require('readline-sync');

const cliente = net.createConnection({
    host: 'localhost',
    port: 5000
});

cliente.on('connect', () => {
    console.log('Conectado al servidor');
    cliente.write('Hola, servidor');
});
cliente.on('data', (data) => {
    console.log('Datos recibidos del servidor:', data.toString());
    cliente.end();
});

cliente.on('error', (error) => {
    console.error('Error en la conexión:', error);
});

function enviarMensaje() {
    const mensaje = readline.question('Ingrese un mensaje: ');
    cliente.write(mensaje);
}