var express = require('express');
var router = express.Router();
var antiheroController = require('../controllers/antiheroController');

router.get('/', antiheroController.getAllAntiheroes);

router.get('/new', function(req, res) {
    res.render('newAntihero');
});

router.post('/', antiheroController.createAntihero);

router.get('/:id', antiheroController.getAntiheroDetail);

module.exports = router;
