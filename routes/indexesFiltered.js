const router = require('express').Router();
const Models = require('../Models')

router.route('/top').get((req,res) => {
    Models.IndexInfo.aggregate([
        {$addFields : {
            'DIFF' : { $subtract : [ "$Close" , "$Open"]},
        }},
        {$addFields : {
            'DIFF%' : { $divide : [ {$multiply : [ "$DIFF", 100]} , "$Open" ]}
        }}]
    )
        .then(names => res.json(names))
        .catch(err => res.status(400).json('ERROR: '+err));
});

module.exports = router;