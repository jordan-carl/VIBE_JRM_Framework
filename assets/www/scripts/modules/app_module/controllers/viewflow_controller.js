/**
 * Description : Script for the application controller to handle views flow
 * events. Author : Rachna Khokhar Date : 30-05-2013
 */

define(['app', 'marionette', 'index_page'],
    function (App, Marionette, IndexPage) {
	console.log("Success...Inside Controller");
	var ViewController = Marionette.Controller.extend({
		loadIndex : function() {
			console.log('Success...Inside Controllers loadIndex');
            // App.pageRegion.show(IndexPage.page);
			this.changePage( '#page_index' );
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