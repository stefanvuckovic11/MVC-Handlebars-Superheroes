var superheroModel = require('../models/superheroModel');

function getAllSuperheroes(req, res) {
    var superheroes = superheroModel.getSuperheroes();
    res.render('index', { superheroes: superheroes });
}

function getSuperheroDetail(req, res) {
    var id = req.params.id;
    var superhero = superheroModel.getSuperheroById(id);

    if (!superhero) {
        res.status(404).send('Superhero not found');
        return;
    }

    res.render('detail', { superhero: superhero });
}

function renderNewSuperheroForm(req, res) {
    res.render('new-superhero');
}

function handleNewSuperhero(req, res) {
    var heroName = req.body.heroName;
    var realName = req.body.realName;
    var superpower = req.body.superpower;
    var origin = req.body.origin;

    superheroModel.addSuperhero(heroName, realName, superpower, origin);

    res.redirect('/');
}

module.exports = {
    getAllSuperheroes: getAllSuperheroes,
    getSuperheroDetail: getSuperheroDetail,
    renderNewSuperheroForm: renderNewSuperheroForm,
    handleNewSuperhero: handleNewSuperhero
};
