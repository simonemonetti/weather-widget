'use strict';

(function(exports, $) {

    var Weather = (function() {

        function shortMonth(month) {
            var monthNames = [
              "Jan", "Feb", "Mar",
              "Apr", "May", "Jun", 
              "Jul", "Aug", "Sep", 
              "Oct", "Nov", "Dec"
            ];

            return monthNames[month];
        }

        function _geoSuccess(position) {

            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            var request = $.ajax({
              url: "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric",
              method: "POST",
              data: {},
            });
             
            request.done(function(response) {
                _processData(response);
            });
        }
        
        function _geoError(error) {
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

        function _processData(data) {
            var date = new Date();
            var month = String(date.getMonth());

            $('.month').text(shortMonth(month));
            $('.day').text(date.getDate());
            $('.temperature .degrees').text(Math.round(data.main.temp));
            $('.description').text(data.weather[0].main);
            $('.location').text(data.name);
            $('.wind .field').text(data.wind.speed);
            $('.humidity .field').text(data.main.humidity);
        }

        function init() {
            Geolocation.getCoords(_geoSuccess, _geoError);
        }

        return{
            init: init
        }

     }());

    Weather.init();

}(window, jQuery));