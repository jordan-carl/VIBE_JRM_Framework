/**
 * Description : Script for holding application level event mappings
 * Author : Rachna Khokhar
 * Date : 04-06-2013
 */

define([], function() {
	var EVENTS = [
	// Events
	[ 'btn_gotohomepage', 'gotoHomepage:button:clicked' ],
			[ 'btn_gotologinpage', 'gotoLoginpage:button:clicked' ],
			[ 'btn_loginsubmit', 'loginsubmit:button:clicked' ],
			];

	/* array positions */
	var EVENT_ID = 0;
	var EVENT_NAME = 1;

	return {
		getEventName : function(eventid) {
			for (i = 0, cnt = EVENTS.length; i < cnt; i++) {
				if (EVENTS[i][EVENT_ID] == eventid) {
					return EVENTS[i][EVENT_NAME];
				}
			}
			return false;
		}
	};
});