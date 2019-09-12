const mongoose = require("../db/connection")
const Schema = mongoose.Schema

// const priceRangeSchema = new Schema({
//     type: {type: String},
//     currency: {type: String},
//     min: {type: Number},
//     max: {type: Number}
// })

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
    // priceRanges: [priceRangeSchema],
    priceRanges: [
        {
            type: {type: String},
            currency: {type: String},
            min: {type: Number},
            max: {type: Number}
        }
    ],
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