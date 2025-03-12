var express = require('express');
var router = express.Router();
var superheroController = require('../controllers/superheroController');

router.get('/', superheroController.getAllSuperheroesAndAntiheroes);

router.get('/superhero/:id', superheroController.getSuperheroDetail);
router.get('/newSuperhero', superheroController.renderNewSuperheroForm);
router.post('/newSuperhero', superheroController.handleNewSuperhero);

module.exports = router;
