var express = require('express');
var router  = express.Router();
var ctrlGoogleApi = require('../controllers/googleapi');
var ctrlLocations = require('../controllers/locations')

// LOCATION DATA
router.get('/locations', ctrlLocations.locationsDataReadAll);

// API KEYS
router.get('/googleurl/:placeId', ctrlGoogleApi.getLocationsData);

module.exports = router;