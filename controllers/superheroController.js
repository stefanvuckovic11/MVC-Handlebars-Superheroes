var superheroModel = require('../models/superheroModel');
var antiheroModel = require('../models/antiheroModel');

function getAllSuperheroes(req, res) {
    var superheroes = superheroModel.getSuperheroes();
    res.render('index', { superheroes: superheroes });
}

function getSuperheroDetail(req, res) {
    var id = req.params.id;
    var superhero = superheroModel.getSuperheroById(id);

    if (!superhero) {
        return res.status(404).send('Superhero not found');
    }

    res.render('detail', { superhero: superhero });
}

function renderNewSuperheroForm(req, res) {
    res.render('newSuperhero');
}
function handleNewSuperhero(req, res) {
    var heroName = req.body.heroName;
    var realName = req.body.realName;
    var superpower = req.body.superpower;
    var origin = req.body.origin;

    superheroModel.addSuperhero(heroName, realName, superpower, origin);
    res.redirect('/');
}
function getAllSuperheroesAndAntiheroes(req, res) {
    var superheroes = superheroModel.getSuperheroes();
    var antiheroes = antiheroModel.getAntiheroes();

    res.render('index', {
        superheroes: superheroes,
        antiheroes: antiheroes
    });
}

module.exports = {
    getAllSuperheroes: getAllSuperheroes,
    getSuperheroDetail: getSuperheroDetail,
    renderNewSuperheroForm: renderNewSuperheroForm,
    handleNewSuperhero: handleNewSuperhero,
    getAllSuperheroesAndAntiheroes: getAllSuperheroesAndAntiheroes
};
