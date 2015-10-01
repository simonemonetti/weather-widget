'use strict';

(function(exports, $) {

    var Geolocation = (function() {

        function getCoords(success, error){

            // Does this browser support geolocation?
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, error);
            }
            else{
                alert("Your browser does not support Geolocation!");
            }

        }

        return {
            getCoords: getCoords
        };

    }());

    // esporto il modulo nel namespace globale
    exports.Geolocation = exports.Geolocation || Geolocation;

}(window, jQuery));