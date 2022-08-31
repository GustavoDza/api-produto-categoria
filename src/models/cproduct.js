'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    categoria: {
        type: String,
        required: true,
        trim: true
    },
    descricao: {
        type: String,
        required: true,
        trim: true
    },
    ativa :{
        type: Boolean, 
        required:true, 
        default:true
    }
});

module.exports = mongoose.model('Cproject', schema);