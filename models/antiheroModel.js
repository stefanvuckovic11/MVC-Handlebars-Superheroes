var fs = require('fs');
var path = require('path');
var dataPath = path.join(__dirname, '../data/antiheroes.json');

function getAntiheroes() {
    var data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
}

function getAntiheroById(id) {
    var antiheroes = getAntiheroes();
    for (var i = 0; i < antiheroes.length; i++) {
        if (antiheroes[i].id === parseInt(id, 10)) {
            return antiheroes[i];
        }
    }
    return null;
}

function addAntihero(antiheroName, realName, power, origin) {
    var antiheroes = getAntiheroes();
    var newId = 1;
    if (antiheroes.length > 0) {
        newId = antiheroes[antiheroes.length - 1].id + 1;
    }

    var newAntihero = {
        id: newId,
        antiheroName: antiheroName,
        realName: realName,
        power: power,
        origin: origin
    };

    antiheroes.push(newAntihero);

    fs.writeFileSync(dataPath, JSON.stringify(antiheroes, null, 2), 'utf-8');
}



module.exports = {
    getAntiheroes: getAntiheroes,
    getAntiheroById: getAntiheroById,
    addAntihero: addAntihero
};
