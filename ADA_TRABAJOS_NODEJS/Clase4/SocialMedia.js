const fs = require('fs');

const profile = {
    name: 'Lorena Garcia',
    age: 41,
    favCity: 'Los Angeles'
};

fs.writeFile('profile.json', JSON.stringify(profile, null, 2),(err) => {
    if (err) {
        console.error("No se pudo crear el perfil", err)
} else {
        console.log("Task completed!! :)");
    }
});