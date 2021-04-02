const mongoose = require('mongoose');
require('@mongoosejs/double');

const stockInfoSchema = new mongoose.Schema({
    "SYMBOL":{type: String, required : true},
    "NAME OF COMPANY":{type: String, required : true},
    "SERIES":{type: String, required : true},
    "DATE OF LISTING":{type: String, required : true},
    "PAID UP VALUE":{type: Number, required : true},
    "MARKET LOT":{type: Number, required : true},
    "ISIN NUMBER":{type: String, required : true},
    "FACE VALUE":{type: Number, required : true},
    "DATE":{type: String, required : true},
    "PREV CLOSE":{type: mongoose.Schema.Types.Double, required : true},
    "OPEN":{type: mongoose.Schema.Types.Double, required : true},
    "HIGH":{type: mongoose.Schema.Types.Double, required : true},
    "LOW":{type: mongoose.Schema.Types.Double, required : true},
    "LAST":{type: mongoose.Schema.Types.Double, required : true},
    "CLOSE":{type: mongoose.Schema.Types.Double, required : true},
    "VWAP":{type: mongoose.Schema.Types.Double, required : true},
    "VOLUME":{type: Number, required : true},
    "TURNOVER":{type: Number, required : true},
    "TRADES":{type: Number, required : true},
    "DELIVERABLE":{type: Number, required : true},
    "DELIVERABLE%":{type: mongoose.Schema.Types.Double, required : true}
});

const stockSchema = new mongoose.Schema({
    "Date":{type: String, required : true},
    "Symbol":{type: String, required : true},
    "Prev Close":{type: mongoose.Schema.Types.Double, required : true},
    "Open":{type: mongoose.Schema.Types.Double, required : true},
    "High":{type: mongoose.Schema.Types.Double, required : true},
    "Low":{type: mongoose.Schema.Types.Double, required : true},
    "Last":{type: mongoose.Schema.Types.Double, required : true},
    "Close":{type: mongoose.Schema.Types.Double, required : true},
    "VWAP":{type: mongoose.Schema.Types.Double, required : true},
    "Volume":{type: Number, required : true},
    "Turnover":{type: Number, required : true},
    "Trade":{type: Number, required : true},
    "Deliverable":{type: Number, required : true},
    "Volume":{type: Number, required : true},
    "Deliverble %":{type: mongoose.Schema.Types.Double, required : true}
});

const indexInfoSchema = new mongoose.Schema({
    "Date":{type: String, required : true},
    "Name":{type: String, required : true},
    "Symbol":{type: String, required : true},
    "Open":{type: mongoose.Schema.Types.Double, required : true},
    "High":{type: mongoose.Schema.Types.Double, required : true},
    "Low":{type: mongoose.Schema.Types.Double, required : true},
    "Close":{type: mongoose.Schema.Types.Double, required : true},
    "Volume":{type: Number, required : true},
    "Turnover":{type: Number, required : true},
});

const indexSchema = new mongoose.Schema({
    "Date":{type: String, required : true},
    "Symbol":{type: String, required : true},
    "Open":{type: mongoose.Schema.Types.Double, required : true},
    "High":{type: mongoose.Schema.Types.Double, required : true},
    "Low":{type: mongoose.Schema.Types.Double, required : true},
    "Close":{type: mongoose.Schema.Types.Double, required : true},
    "Volume":{type: Number, required : true},
    "Turnover":{type: Number, required : true},
});


const StockInfo = mongoose.model('symbolInfo', stockInfoSchema, 'symbolDetails')
const Stock = mongoose.model('stock', stockSchema, 'stocks')
const IndexInfo = mongoose.model('indexInfo', stockInfoSchema, 'indexDetails')
const Index = mongoose.model('index', stockSchema, 'indexes')

module.exports ={
    StockInfo,
    Stock,
    IndexInfo,
    Index
}

