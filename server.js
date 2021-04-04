// always execute this file line first:
// npm install express cors mongoose dotenv nodemon

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const DB_URL = process.env.DB_URL;
const port = process.env.PORT || 5000;


//back-end middleware
app.use(cors());
app.use(express.json());


//mongoose

mongoose.connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection=mongoose.connection;
connection.on('error', console.error.bind(console, 'Connection Error: '));
connection.once('open', () => {
    console.log("MongoDB Atlas connection established succesfully")
    
})


//Import Routes
const baseRouter = require('./routes/baseRoutes');
const stockRouter = require('./routes/stock');
const stocksInfoRouter = require('./routes/stocksInfo');
const indexRouter = require('./routes/indexSymbol');
const indexesInfoRouter = require('./routes/indexesInfo');

const stocksFilterRouter = require('./routes/stocksFiltered');


//Routes
app.use('/', baseRouter)
app.use('/stock', stockRouter)
app.use('/stocks', stocksInfoRouter);
app.use('/index', indexRouter);
app.use('/indexes', indexesInfoRouter);
app.use('/stockf',stocksFilterRouter);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });
  
  // Handle all the previous errors (including 404 and others)
  app.use((error, req, res, next) => {
    console.log(req.body);
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });


//listening to server
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
})