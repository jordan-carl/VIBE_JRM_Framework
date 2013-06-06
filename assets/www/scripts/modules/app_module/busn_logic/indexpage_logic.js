/**
 * Description : Script for the applications index page business logic.
 * Author : Rachna Khokhar
 * Date : 04-06-2013
 */

define([ 'marionette', 'app' ], function( Marionette, App ) {
	console.log("Success..Inside indexpage business logic.");
	var Event_Handler = {};
	Event_Handler.HandleEvents = function (opts){
		return new (Marionette.Controller.extend({
		initialize : function () {
			console.log("Success..Initialized business logic");
			this.listenTo(App, "gotoHomepage:button:clicked", this.onGotoHomePageButtonClicked);
			this.listenTo(App, "gotoLoginpage:button:clicked", this.onGotoLoginPageButtonClicked);
		},
		onGotoHomePageButtonClicked : function() {
			console.log("Inside...On Home Page Button Clicked");
			App.Router.navigate('home', {trigger:true});
		},
		onGotoLoginPageButtonClicked : function() {
			console.log("Inside...On Login Page Button Clicked");
			App.Router.navigate('home', {trigger:true});
		}
	}))(opts);
	}
	return Event_Handler;
});