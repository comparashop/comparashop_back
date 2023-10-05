const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Panier = require('./panier.model');

const panierSchema = new Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
    },
    aliments:{
        type: Array,
    }
});

module.exports = mongoose.model('Panier', panierSchema);