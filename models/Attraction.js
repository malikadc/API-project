const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Attraction = new Schema ({
    name: String,
    type: String,
    url: String,
    locale: String
});

module.exports = mongoose.model('Attraction', Attraction)