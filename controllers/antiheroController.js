var antiheroModel = require('../models/antiheroModel');

function getAllAntiheroes(req, res) {
    var antiheroes = antiheroModel.getAntiheroes();
    res.render('antiheroIndex', { antiheroes: antiheroes });
}

function getAntiheroDetail(req, res) {
    var id = req.params.id;
    var antihero = antiheroModel.getAntiheroById(id);

    if (!antihero) {
        return res.status(404).send('Antihero not found');
    }

    res.render('antiheroDetail', { antihero: antihero });
}

function createAntihero(req, res) {
    var antiheroName = req.body.antiheroName;
    var realName = req.body.realName;
    var power = req.body.power;
    var origin = req.body.origin;

    antiheroModel.addAntihero(antiheroName, realName, power, origin);
    res.redirect('/antiheroes');
}

module.exports = {
    getAllAntiheroes: getAllAntiheroes,
    getAntiheroDetail: getAntiheroDetail,
    createAntihero: createAntihero
};
