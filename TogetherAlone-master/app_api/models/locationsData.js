var mongoose = require('mongoose');

var openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});


var locationsDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
// Always store coordinates longitude, latitude order.
    coords: {
        type: [Number],
        index: '2dsphere'
    },
    openingTimes: [openingTimeSchema]
});

mongoose.model('locationsData', locationsDataSchema, 'LocationsData')