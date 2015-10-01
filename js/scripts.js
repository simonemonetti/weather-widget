'use strict';

var callbackFunction = function(data) {
	console.log(data);
	var wind = data.query.results.channel.wind;
	alert(wind.chill);
};

// Does this browser support geolocation?
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
}
else{
	showError("Your browser does not support Geolocation!");
}

function locationSuccess(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;

	// We will make further requests to Yahoo's APIs here
}

function locationError(error){
	switch(error.code) {
		case error.TIMEOUT:
			showError("A timeout occured! Please try again!");
			break;
		case error.POSITION_UNAVAILABLE:
			showError('We can\'t detect your location. Sorry!');
			break;
		case error.PERMISSION_DENIED:
			showError('Please allow geolocation access for this to work.');
			break;
		case error.UNKNOWN_ERROR:
			showError('An unknown error occured!');
			break;
	}

}

function showError(msg){
	weatherDiv.addClass('error').html(msg);
}

function banana(data) {
	// code
	console.log('success');
}

function locationSuccess(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;

	// Yahoo's PlaceFinder API http://developer.yahoo.com/geo/placefinder/
	// We are passing the R gflag for reverse geocoding (coordinates to place name)
	var geoAPI = 'http://where.yahooapis.com/geocode?location='+lat+','+lon+'&flags=J&gflags=R';

	// Forming the query for Yahoo's weather forecasting API with YQL
	// http://developer.yahoo.com/weather/

	var wsql = 'select * from weather.forecast where woeid=WID and u="'+DEG+'"',
		weatherYQL = 'http://query.yahooapis.com/v1/public/yql?q='+encodeURIComponent(wsql)+'&format=json&callback=banana?',
		code, city, results, woeid;


	var scr = document.createElement('script');
	scr.src+= 'https://query.yahooapis.com/v1/public/yql?q='+wsql;
	document.body.appendChild(scr);

	// Issue a cross-domain AJAX request (CORS) to the GEO service.
	// Not supported in Opera and IE.

}