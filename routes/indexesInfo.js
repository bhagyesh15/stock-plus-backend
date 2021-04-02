const router = require('express').Router();
const Models = require('../Models')

router.route('/').get((req,res) => {
    Models.IndexInfo.find()
        .then(names => res.json(names))
        .catch(err => res.status(400).json('ERROR: '+err));
});

router.route('/:symbol').get((req,res) => {
    Models.IndexInfo.find({"Symbol" : req.params.symbol})
        .then(document => res.json(document))
        .catch(err => res.status(400).json('ERROR: '+err));
});

module.exports = router;