const net=require('net');

const server=net.createServer();

server.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    
    socket.on('data', (data) => {
        console.log('Datos recibidos:', data.toString());
        socket.write('Datos recibidos');
    });

    socket.on('close', () => {
        console.log('Cliente desconectado');
    });
    socket.on('error', (error) => {
        console.error('Error en la conexioĢn:', error);
    });
});
    server.listen(3000, () => {
        console.log('Servidor escuchando en el puerto 5000');
    
});

