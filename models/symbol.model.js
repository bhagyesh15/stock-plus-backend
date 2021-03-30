const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const symbolSchema = new Schema({
    "SYMBOL":{type: String, required : true},
    "NAME OF COMPANY":{type: String, required : true},
   " SERIES":{type: String, required : true},
    "DATE OF LISTING":{type: String, required : true},
    "PAID UP VALUE":{type: Number, required : true},
    "MARKET LOT":{type: Number, required : true},
    "ISIN NUMBER":{type: String, required : true},
    "FACE VALUE":{type: Number, required : true},
});

const Symbol = mongoose.model('Symbol', symbolSchema, 'symbolDetails');

module.exports = Symbol;