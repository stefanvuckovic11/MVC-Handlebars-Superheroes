var express = require('express');
var router = express.Router();
var superheroController = require('../controllers/superheroController');

router.get('/', superheroController.getAllSuperheroes);
router.get('/superhero/:id', superheroController.getSuperheroDetail);

router.get('/new-superhero', superheroController.renderNewSuperheroForm);
router.post('/new-superhero', superheroController.handleNewSuperhero);

module.exports = router;
