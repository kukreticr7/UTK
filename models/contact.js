const { string, number } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    title: String,
    location : String,
    phoneno : Number,
    email : String,
    message: String,  
});

module.exports = mongoose.model("Contacts", contactSchema);
