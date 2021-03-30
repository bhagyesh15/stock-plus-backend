const router = require('express').Router();
let Test = require('../models/test.model');

router.route('/').get((req,res) => {
    Test.find()
        .then(testnames => res.json(testnames))
        .catch(err => res.status(400).json('ERROR: '+err));
});

module.exports = router;