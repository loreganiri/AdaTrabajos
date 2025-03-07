const net = require('net');

const client = net.createConnection({port: 8080},() => {
        console.log('Conectado al servidor');
        client.write('/Users/lorena/Desktop/ADA_TRABAJOS_NODEJS/Clase11/documento.txt')
        //client.write("ADA_TRABAJOS_NODEJS/Clase11/documento.txt") probando con la absoluta y luego con la relativa
        
    });

    client.on('data', (data) => {
        console.log(data.toString());
        client.end();
    });

    client.on('end', () => {
        console.log('Desconectado del servidor');
    });

    client.on('error', (error) => {
        console.error(error);
    });