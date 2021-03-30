const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockSchema = new Schema({
    
});

const Symbol = mongoose.model('Symbol', stockSchema, 'symbolDetails');

module.exports = Symbol;