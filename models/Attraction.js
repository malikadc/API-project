const Attraction = new Schema ({
    name: String,
    type: String,
    url: String,
    locale: String,
    classification: [{
        primary: Boolean,
        genre: {
            id: Number,
            name: String
        }
    }
    ]
})