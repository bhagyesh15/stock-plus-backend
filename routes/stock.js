const router = require('express').Router();
const Models = require('../Models')

router.route('/:stock').get((req,res) => {
    Models.Stock.find({"Symbol" : req.params.stock})
    .then((stock) => res.json(stock))
    .catch(err => res.status(400).json('ERROR: '+err));
});

module.exports = router;