const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//get
router.get('/', (req,res)=> {
    res.status(200).json({
        message: 'Stock-Plus Server | 200 OK | Bhagyesh Ganatra'
    })
})

module.exports = router ;