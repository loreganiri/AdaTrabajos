const net = require('net');

const client = net.createConnection({
    host: 'localhost',
    port: 5000
});

client.on('connect', () => {
    console.log('Conectado al servidor');
    client.write('Hola, servidor!');
});

client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
    client.end('Adios, servidor!');
});

client.on('error', (error) => {
    console.error('Error en la conexión:', error);
});