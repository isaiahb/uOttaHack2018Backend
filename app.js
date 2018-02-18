

function loadClinics() {
    var clinicResults = "";
    request(googlePlacesApiCall, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            clinicResults = (body); // Print the google web page.
            console.log(body);
        }
    })
    console.log("~~~~~~~~~~~~~~~~~");
    for (var clinic in clinicResults) {
        console.log(clinic);
    }
}




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//loadClinics();

const express = require('express')

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// google places key AIzaSyA_LPXMB_8ys7aYYyUwvntaRIg20bcV-Bs
var googlePlacesApiCall = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.4231,-75.6831&radius=10000&types=health&name=walk+in+clinic&key=AIzaSyA_LPXMB_8ys7aYYyUwvntaRIg20bcV-Bs"
var clinics = {};
var request = require('request');

const app = express()
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require("./app/routes")(app, {});

app.listen(3001, function () {
    console.log("invalid request");
});

/*app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3001);*/

module.exports = app;
