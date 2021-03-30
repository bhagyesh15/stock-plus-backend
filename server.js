// always execture this file line first:
// npm install express cors mongoose dotenv nodemon

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


//back-end middleware
app.use(cors());
app.use(express.json());





//mongoose



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection=mongoose.connection;
connection.on('error', console.error.bind(console, 'Connection Error: '));
connection.once('open', () => {
    console.log("MongoDB Atlas connection established succesfully")
    
})

//using our models and routes
const testRouter = require('./routes/tests');
app.use('/tests', testRouter)

const symbolRouter = require('./routes/symbols');
app.use('/symbols', symbolRouter);


//listening to server
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
})