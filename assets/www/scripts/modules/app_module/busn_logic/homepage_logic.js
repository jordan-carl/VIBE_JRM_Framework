/**
 * Description : Script for the applications home page business logic.
 * Author : Rachna Khokhar
 * Date : 05-06-2013
 */

define([ 'marionette', 'app', 'event_dictionary' ], function( Marionette, App, Event_Dict ) {
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
			username = $(text_enter_username).val();
			password = $(text_enter_password).val();
			console.log('Username='+username+'  Password='+password);
			var _event = Event_Dict.getEventName('login_validate');
			console.log("Success..event..." + _event);
			var loginData = "Username=indus$Password=indus$Longitude=77.0838169$Latitude=28.4965582$TimeStamp=2013-03-14 14:30:28.608";
			App.trigger(_event, {requestdata : loginData});
		}
		}))(opts);
	}
	return Event_Handler;
});