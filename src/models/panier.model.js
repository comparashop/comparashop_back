const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Shop = require('./shop.model');

const panierSchema = new Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
    },
    aliments:{
        type: Array,
    },
    commerces:[
        {
            shop: {
                type: Schema.Types.ObjectId,
                ref: () => Shop
            },
            priceTotal: Number,
        }
    ],
});

module.exports = mongoose.model('Panier', panierSchema);