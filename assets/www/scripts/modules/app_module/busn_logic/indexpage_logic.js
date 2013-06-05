/**
 * Description : Script for the applications index page business logic.
 * Author : Rachna Khokhar
 * Date : 04-06-2013
 */

define([ 'marionette', 'app' ], function( Marionette, App ) {
	console.log("Success..Inside indexpage business logic.");
	var Event_Handler = Marionette.Controller.extend({
		initialize : function () {
			console.log("Success..Initialized business logic");
			this.listenTo(App, "gotoHomepage:button:clicked", this.onGotoHomePageButtonClicked);
		},
		onGotoHomePageButtonClicked : function() {
			console.log("Inside...On Home Page Button Clicked");
			App.Router.navigate('home', {trigger:true});
		}
	});
	return new Event_Handler();
});