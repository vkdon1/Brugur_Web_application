const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: Number,
    Conform_password: Number,
});

module.exports = mongoose.model('FormData', FormDataSchema);
