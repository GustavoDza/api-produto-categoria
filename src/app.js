const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://fiap:senha@cluster0.hdws5tx.mongodb.net/estoque_produto");

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token' )
    next();
});

//registrar a model
require('./models/product');
require('./models/cproduct');

//registrar a roda
const productRouter = require('./routes/product-route');
const cproductRouter = require('./routes/cproduct-route')
const index = require('./routes/index')

app.use('/', index);
app.use('/products', productRouter);
app.use('/cproduct', cproductRouter);

module.exports = app


