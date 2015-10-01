'use strict';

(function(exports, $) {

	var Utils = (function() {
		$('.flip').on("click", function() {
			$('.card').toggleClass('flipped');

			var scr = document.createElement('script');
			scr.src+= 'https://maps.googleapis.com/maps/api/js?&signed_in=true&callback=initMap';
			document.body.appendChild(scr);
			//$('#map').css('display', 'block');
		});
	}());

	// esporto il modulo nel namespace globale
    exports.Utils = exports.Utils || Utils;

}(window, jQuery));