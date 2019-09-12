const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Venues = new Schema({
    name: String,
    type: String,
    url: String,
    postalCode: Number,
    timezone: String,
    city: {name: String},
    state: {
        name: String,
        stateCode: String
    },
    country: {
        name: String,
        countryCode: String
    }
})


module.exports = mongoose.model('Venues',Venues)