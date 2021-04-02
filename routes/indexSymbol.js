const router = require('express').Router();
const Models = require('../Models')

router.route('/:index').get((req,res) => {
    Models.Index.find({"Symbol" : req.params.index})
    .then((index) => res.json(index))   
    .catch(err => res.status(400).json('ERROR: '+err));
});

module.exports = router;