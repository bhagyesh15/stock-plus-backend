const router = require('express').Router();
const Models = require('../Models')

router.route('/:index').get((req,res) => {
    Models.Index.aggregate([
        { $match : { Symbol: req.params.index}},
        { $sort: { Date : 1}}
    ])
    .then((index) => res.json(index))   
    .catch(err => res.status(400).json('ERROR: '+err));
});

module.exports = router;