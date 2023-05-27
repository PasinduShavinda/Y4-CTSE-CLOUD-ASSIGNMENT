const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    pname: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)