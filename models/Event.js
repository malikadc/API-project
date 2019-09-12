const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Event = new Schema ({
    name: String,
    type: String,
    url: String,
    locale: String,
    presales: [{
        startDateTime: Date,
        endDateTime: Date,
        name: String
    }],
    // priceRanges: [{
    //     type: String,
    //     currency: String,
    //     min: Number,
    //     max: Number
    // }],
    seatmap:[{
        staticUrl: String
    }],
    attraction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attraction"
    },
    venue: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Venue"
    }
})

module.exports = mongoose.model('Event', Event)