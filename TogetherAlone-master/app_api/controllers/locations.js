var mongoose = require('mongoose');
var LocationsData = mongoose.model('locationsData');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}
// GET all locationsData records
module.exports.locationsDataReadAll = function(req, res)
{
  console.log("Finding all Locations Data Records", req);
  
  LocationsData
    .find({})
    .exec(function(err, locationsData){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(locationsData);
      sendJSONresponse(res, 200, locationsData);
    });
}