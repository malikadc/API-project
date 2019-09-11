const Event = new Schema ({
    name: String,
    type: String,
    id: Number,
    url: String,
    locale: String,
    presales: [{
        startDateTime: Date,
        endDateTime: Date,
        name: String

    }],
    priceRanges: [{
        type: String,
        currency: String,
        min: Number,
        max: Number
    }],
    seatmap:[{
        staticUrl: String
    }]
})