/**
 * Description : Script for holding application level event mappings
 * Author : Rachna Khokhar
 * Date : 04-06-2013
 */

define([], function() {
	var VIEW_EVENTS = [
	// Events
		[ 'btn_gotohomepage', 'gotoHomepage:button:clicked' ],
		[ 'btn_gotologinpage', 'gotoLoginpage:button:clicked' ],
		[ 'btn_loginsubmit', 'loginsubmit:button:clicked' ],
		[ 'text_enter_username', 'username:inputtext:keypress' ],
		[ 'text_enter_password', 'password:inputtext:keypress' ],
		[ 'login_validate', 'remote:login:validate'],
	];

	/* array positions */
	var EVENT_ID = 0;
	var EVENT_NAME = 1;

	return {
		getEventName : function(eventid) {
			for (i = 0, cnt = VIEW_EVENTS.length; i < cnt; i++) {
				if (VIEW_EVENTS[i][EVENT_ID] == eventid) {
					return VIEW_EVENTS[i][EVENT_NAME];
				}
			}
			return false;
		}
	};
});