var request = require('request');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(JSON.parse(content));
    //res.json(content);
};

/* GET all API Key Values Values */
module.exports.getLocationsData= function(req, res)
{
    console.log("Retrieving Key Store Values");
    
    var lat = req.params.lat;
    var lon = req.params.lon;
    var placeId = req.params.placeId;
    
    var googleurl = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId + '&key=' + process.env.GOOGLE_KEY;
    
     request(googleurl, function(error, response, body){
        //console.log(body);
        sendJSONresponse(res, "200", body); 
    });
}