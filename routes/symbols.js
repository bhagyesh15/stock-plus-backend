const router = require('express').Router();
let Symbol = require('../models/symbol.model');

router.route('/').get((req,res) => {
    Symbol.find()
        .then(names => res.json(names))
        .catch(err => res.status(400).json('ERROR: '+err));
});

router.route('/:symbol').get((req,res) => {
    Symbol.find({"SYMBOL" : req.params.symbol})
        .then(document => res.json(document))
        .catch(err => res.status(400).json('ERROR: '+err));
});

module.exports = router;