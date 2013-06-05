/**
 * Description : Script for the applications index page business logic.
 * Author : Rachna Khokhar
 * Date : 04-06-2013
 */

define(['event_dictionary'], function(Event_Dict) {
	console.log("Success..Inside indexpage business logic.");
	var Busn_Logic = {};
	Busn_Logic.onButtonClick = function (opts) {
		console.log("Success..Inside onButtonClick.");
		var btn_id = opts.id;
		console.log("Success..btn_id..."+btn_id);
		var btn_event = Event_Dict.getEventName(btn_id);
		console.log("Success..btn_event..."+btn_event);
	};
	return Busn_Logic;
});