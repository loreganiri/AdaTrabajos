const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado!');

    socket.on('data', (data) => {
    const msg = data.toString();   
    console.log('Mensaje recibido:', msg);

const answer = 'Respuesta del servidor: ' + msg;
    socket.write(answer);
    });

    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

server.listen(3000, () => { //Puse 3000 por que me decia en mi compu que el 5000 ya estaba en uso
    console.log('Servidor escuchando en el puerto 3000');
});