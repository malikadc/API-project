const Event = require("../models/Event");
const Attraction = require("../models/Attraction");
const Venues = require("../models/Venues");

const eventJsonData = require("./data/events.json");


function getAllAttractions(events) {
    const attractions = events.map(event => {
        return event._embedded.attractions[0];
    });
    return attractions;
}

function getAllVenues(events) {
    const venues = events.map(event => {
        return event._embedded.venues[0];
    });
    return venues;
}

const eventsArr = eventJsonData._embedded.events;
const attractionsArr = getAllAttractions(eventsArr);
const venuesArr = getAllVenues(eventsArr);



Attraction.deleteMany({}).then( () => {
    Attraction.create(attractionsArr).then(attractions => {
    //   console.log(attractions);
    //   process.exit();
    });
  });

Venues.deleteMany({}).then( () => {
    Venues.create(venuesArr).then(venues => {
    //   console.log(venues);
    //   process.exit();
    });
  });

Event.deleteMany({}).then( () => {
    Event.create(eventsArr).then(events => {

        // iterating through each events in eventsDB
        events.forEach(eventDocument => {
            // find event json that was used to create event document
            const eventJson = eventsArr.find(eventJsonItem => {
                return eventJsonItem.name === eventDocument.name;
            });

            Attraction.findOne( { name: eventJson._embedded.attractions[0].name })
                .then(attractionDocument => {
                    // console.log(kingdomDocument)
                    eventDocument.attraction = attractionDocument.id;
                    
                    Venues.findOne( { name: eventJson._embedded.venues[0].name })
                    .then(venuesDocument => {
                        // console.log(kingdomDocument)
                        eventDocument.venue = venuesDocument.id;
                        eventDocument.save();
                    })

                })
        });
    });
});


