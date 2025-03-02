const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(data.toString());
        socket.write('Echo: ' + data.toString());
    });

    socket.on('end', () => {
        console.log('Client went bye bye');
    });

    socket.on(close, () => {
        console.log('Le cerramos al cliente');
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});