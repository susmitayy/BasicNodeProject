const mongoose = require('mongoose')

const schema = mongoose.Schema

const productSchema = new schema({
    name: {
        type : String,
        requireq: true,
    },

    color: {
        type : String,
        required :true
    },
    price: {
        type : String,
        required :true
    },
});

module.exports = mongoose.model('NewProduct' ,productSchema)