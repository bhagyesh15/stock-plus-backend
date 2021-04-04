const router = require('express').Router();
const Models = require('../Models')

router.route('/topgainers').get((req,res) => {
    Models.StockInfo.aggregate([
        {$addFields : {
            'DIFF' : { $subtract : [ "$CLOSE" , "$PREV CLOSE"]},
        }},
        {$addFields : {
            'DIFF%' : { $divide : [ {$multiply : [ "$DIFF", 100]} , "$PREV CLOSE" ]}
        }},
        { $sort : {
            'DIFF%' : -1
        }},
        { $limit : 10}
    ])
        .then(names => res.json(names))
        .catch(err => res.status(400).json('ERROR: '+err));
});

router.route('/toplosers').get((req,res) => {
    Models.StockInfo.aggregate([
        {$addFields : {
            'DIFF' : { $subtract : [ "$CLOSE" , "$PREV CLOSE"]},
        }},
        {$addFields : {
            'DIFF%' : { $divide : [ {$multiply : [ "$DIFF", 100]} , "$PREV CLOSE" ]}
        }},
        { $sort : {
            'DIFF%' : 1
        }},
        { $limit : 10}
    ])
        .then(names => res.json(names))
        .catch(err => res.status(400).json('ERROR: '+err));
});

module.exports = router;