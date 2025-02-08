fs = require('fs');

const estudiantes = [
    { nombre: 'Lorena', apellido: 'Garcia', edad: 41, curso: 'Desarrollo Web', notas: [8, 9, 10] },
    { nombre: 'Nataly', apellido: 'Rivera', edad: 37, curso: 'Desarrollo Web', notas: [7, 9, 9] },
    { nombre: 'Andrea', apellido: 'Gonzalez', edad: 21, curso: 'Desarrollo Web', notas: [8, 6, 7] },
    { nombre: 'Saray', apellido: 'Belmonte', edad: 19, curso: 'Desarrollo Web', notas: [9, 9, 9] }

];

module.exports = estudiantes; // Exporta el objeto estudiantes para que pueda ser utilizado en otros archivos