var request = require('request');
var googlePlacesApiCall = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.4231,-75.6831&radius=10000&types=health&name=walk+in+clinic&key=AIzaSyA_LPXMB_8ys7aYYyUwvntaRIg20bcV-Bs"
var clients = {}
function Client(id) {
    this.Id = id;
    this.Symptoms = {};
    this.CurrentClinicId = "";
}

function GetClinics(res) {
    var clinicResults = "";
    request(googlePlacesApiCall, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            clinicResults = (body); // Print the google web page.
            res.send(body);
        }
    })

    // return "{so, many, clinics}";
}
module.exports = function(app, db) {
    app.get("/GetClinics", function(req, res) {
        (GetClinics(res));
    })
}