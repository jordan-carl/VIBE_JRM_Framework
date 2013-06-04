/**
 * Description : Script to configure jquery before application start. To use Backbone Routing instead of Jquery Routing.
 * Author : Rachna Khokhar
 * Date : 30-05-2013
 */

define(['jquery'], function(){
	
	console.log("Inside...JQM_Config");
	$(document).bind("mobileinit", function () {
	    $.mobile.ajaxEnabled = false;
	    $.mobile.linkBindingEnabled = false;
	    $.mobile.hashListeningEnabled = false;
	    $.mobile.pushStateEnabled = false;

	    // Remove page from DOM when it's being replaced
	    $('div[data-role="page"]').on('pagehide', function (event, ui) {
	        $(event.currentTarget).remove();
	    });
	});
});