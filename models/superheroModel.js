var fs = require('fs');
var path = require('path');
var dataPath = path.join(__dirname, '../data/superheroes.json');

function getSuperheroes() {
    var data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
}

function getSuperheroById(id) {
    var superheroes = getSuperheroes();
    for (var i = 0; i < superheroes.length; i++) {
        if (superheroes[i].id === parseInt(id, 10)) {
            return superheroes[i];
        }
    }
    return null;
}

function addSuperhero(heroName, realName, superpower, origin) {
    var superheroes = getSuperheroes();

    var newId = 1;
    if (superheroes.length > 0) {
        newId = superheroes[superheroes.length - 1].id + 1;
    }

    var newHero = {
        id: newId,
        heroName: heroName,
        realName: realName,
        superpower: superpower,
        origin: origin
    };

    superheroes.push(newHero);

    fs.writeFileSync(dataPath, JSON.stringify(superheroes, null, 2), 'utf-8');
}

module.exports = {
    getSuperheroes: getSuperheroes,
    getSuperheroById: getSuperheroById,
    addSuperhero: addSuperhero
};
