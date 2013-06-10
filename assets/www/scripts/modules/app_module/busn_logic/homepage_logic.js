/**
 * Description : Script for the applications home page business logic.
 * Author : Rachna Khokhar
 * Date : 05-06-2013
 */

define([ 'marionette', 'app' ], function( Marionette, App ) {
	console.log("Success..Inside homepage business logic.");
	var Event_Handler = {};
	var username, password;
	Event_Handler.HandleEvents = function (opts){
		return new (Marionette.Controller.extend({
		initialize : function () {
			console.log("Success..Initialized business logic");
			this.listenTo(App, "username:inputtext:keypress", this.onUsernameKeyPress);
			this.listenTo(App, "password:inputtext:keypress", this.onPasswordKeyPress);
			this.listenTo(App, "loginsubmit:button:clicked", this.onLoginSubmitButtonClick);
		},
		onUsernameKeyPress : function(options) {
			console.log("Inside...On KeyPress..");
			// Set text on return or focusout
			var evt = options.event;
			console.log("KeyCode.."+evt.keyCode);
			console.log("Event type.."+evt.type);
			if( evt.keyCode === 13 ){
				console.log("Inside...On Enter KeyPress........."+$(evt.target).val());
				username = $(evt.target).val();
				//options.model.set({ username_value : $(evt.target).val() })
				if( evt.type !== 'focusout' ){
					$(evt.target).focusout();
				}
				evt.preventDefault();
			}
		},
		onPasswordKeyPress : function(options) {
			console.log("Inside...On KeyPress..");
			// Set text on return or focusout
			var evt = options.event;
			console.log("KeyCode.."+evt.keyCode);
			console.log("Event type.."+evt.type);
			if( evt.keyCode === 13 ){
				console.log("Inside...On Enter KeyPress........."+$(evt.target).val());
				password = $(evt.target).val();
				if( evt.type !== 'focusout' ){
					$(evt.target).focusout();
				}
				evt.preventDefault();
			}
		},
		onLoginSubmitButtonClick : function(options){
			console.log("Inside...On Login Button Click");
			
		}
		}))(opts);
	}
	return Event_Handler;
});