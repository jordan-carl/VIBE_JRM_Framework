/**
 * Description : Script for the index page content view.
 * Author : Rachna Khokhar
 * Date : 30-05-2013
 */
define([ 'underscore', 'marionette', 'event_dictionary', 'app' ], function(_,
		Marionette, Event_Dict, App) {
	console.log("Success..Inside Content Index View.");
	var Content = {};
	Content.contentView = function(opts) {
		return new (Marionette.ItemView.extend({
			tagName : 'article',
			attributes : function() {
				console.log('options name==' + opts.name);
				return {
					'region_id' : 'content',
					'id' : 'content_' + opts.name,
					'data-role' : 'content'
				};
			},
			initialize : function() {
				_.bindAll(this, "template");
			},
			template : function() {
				return opts.template;
			},
			model : function() {
				console.log("i m inside model");
				return opts.model;
			},
			events : {
				'click input[type="button"]' : 'onButtonClick',
				'keypress input[type="text"]' : 'onKeyPress',
				'keypress input[type="password"]' : 'onKeyPress',
				'blur input[type="text"]' : 'onKeyPress',
				'blur input[type="password"]' : 'onKeyPress'
			},
			onButtonClick : function(obj) {
				console.log("I am inside the button click...Hurray!!!");
				var btn_id = $(obj.target).attr('id');
				console.log("The button clicked id is==="
						+ $(obj.target).attr('id'));
				var btn_event = Event_Dict.getEventName(btn_id);
				console.log("Success..btn_event..." + btn_event);
				App.trigger(btn_event);
			},
			onKeyPress : function(event_obj) {
				console.log("I am inside the keypress...Hurray!!!");
				var inputTypeText_id = $(event_obj.target).attr('id');
				console.log("The input type text id is==="
						+ $(event_obj.target).attr('id'));
				var inputText_event = Event_Dict.getEventName(inputTypeText_id);
				console.log("Success..inputText_event..." + inputText_event);
				App.trigger(inputText_event, {model: this.model, event: event_obj});
			}
		}))(opts);
	};
	return Content;
});