/**
 * Description : Script to create main marionette application instance with the required initializers.
 * Author : Rachna Khokhar
 * Date : 30-05-2013
 */

define(['marionette'],
    function (Marionette) {
		console.log("Success...I am inside app.");
        var App = new Marionette.Application();

        function isMobile() {
            var ua = (navigator.userAgent || navigator.vendor || window.opera, window, window.document);
            return (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }

        App.mobile = isMobile();
        console.log("Success...Value=="+App.mobile);

        App.on('initialize:after', function() {
    		Backbone.history.start();
    	});
        console.log("Success...Returning App.");
        
        App.on('start', function() {
        	console.log('app just started');
        });
        return App;
    });