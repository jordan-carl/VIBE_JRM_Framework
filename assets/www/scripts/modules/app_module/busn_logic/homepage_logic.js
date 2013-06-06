/**
 * Description : Script for the applications home page business logic.
 * Author : Rachna Khokhar
 * Date : 05-06-2013
 */

define([ 'marionette', 'app' ], function( Marionette, App ) {
	console.log("Success..Inside homepage business logic.");
	var Event_Handler = {};
	Event_Handler.HandleEvents = function (opts){
		return new (Marionette.Controller.extend({
		initialize : function () {
			console.log("Success..Initialized business logic");
			this.listenTo(App, "enterusername:text:keypress", this.onKeyPress);
		},
		onKeyPress : function() {
			console.log("Inside...On KeyPress");
		}
		}))(opts);
	}
	return Event_Handler;
});