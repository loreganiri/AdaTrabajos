const net = require('net');
const path = require('path');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        const inputPath = data.toString().trim();
        const isAbsolute = path.isAbsolute(inputPath);
        const response = isAbsolute ? 'La ruta es absoluta.' : 'La ruta es relativa.';
        socket.write(response);
    });
    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});
server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080.');
});