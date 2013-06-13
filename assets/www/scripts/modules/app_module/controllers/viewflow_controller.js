/**
 * Description : Script for the application controller to handle views flow
 * events. Author : Rachna Khokhar Date : 30-05-2013
 */

define(['app', 'marionette', 'remote_controller', 'index_page', 'home_page'],
    function (App, Marionette, RemoteController, IndexPage, HomePage) {
	console.log("Success...Inside Controller");
	var ViewController = Marionette.Controller.extend({
		loadIndexPage : function() {
			console.log('Success...Inside Controllers loadIndex');
			RemoteController.HandleEvents();
			this.changePage( '#page_index' );
		},
		
		loadHomePage : function() {
			console.log('Success...Inside Controllers loadHome');
			this.changePage( '#page_home' );
		},
	
		changePage : function ( page, opts ) {
			console.log("Inside...ChangePage.");
			opts = opts || {};
			_.extend(opts, { transition: "slide", changeHash: false});
			$.mobile.changePage(page,  opts );
		}
	});
	return new ViewController();
});