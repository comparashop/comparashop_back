const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Panier = require('./panier.model');

const shopSchema = new Schema({
    name: {
        type: String,
    },
    adresse: {
        type: String,
    },
    localization: {
        type: Object,
    },
});

module.exports = mongoose.model('Shop', shopSchema);