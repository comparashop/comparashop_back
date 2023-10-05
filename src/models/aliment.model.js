const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alimentSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: String,
    },
});

module.exports = mongoose.model('Aliment', alimentSchema);