const Venues = new Schema({
    name: String,
    type: String,
    url: String,
    postalCode: Number,
    timezone: String,
    city: String,
    state: [{
        name: String,
        stateCode: String
    }],
    country: [{
        name: String,
        countryCode: String
    }],
    address: String
})
