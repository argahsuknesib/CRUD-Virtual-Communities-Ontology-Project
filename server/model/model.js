const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    subject : {
        type: String,
        required: true,
        unique: true
    },
    property : {
        type: String,
        required: true,
        unique: true
    },    
    value : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;