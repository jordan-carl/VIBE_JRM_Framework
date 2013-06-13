/**
 * Description : Script for handling response received from network activities.
 * Author : Rachna Khokhar
 * Date : 10-06-2013
 */

define(['interfaceJS', 'INetworkListener'],
    function (Interface, INetListener) {
		console.log("Success...I am inside ajaxResponseHandler.");
		var AjaxRespHandler = {};
		AjaxRespHandler.loginResponseHandler = (function(){
			console.log('I am inside login response handler');
			var properties = { 
					actions: { 
						onSuccess: function(data, textStatus, jqXHR) {
							console.log('Received on success');
						},
						onError: function(jqXHR, textStatus, errorThrown) {
							console.log('textStatus here='+textStatus+' errorThrown here='+errorThrown);
							console.log('Received on error');
						},
						onException: function(jqXHR, textStatus, errorThrown) {
							console.log('Received on exception');
						},
						onComplete: function(jqXHR, textStatus) {
							console.log('Received on complete');
						}
					}
			};
			function Listener(config){
				console.log('I am inside the Listener');
				// Pass in the methods we are expecting, 
				// followed by the name of the Interface instance that we're checking against
				Interface.ensureImplements(config.actions, INetListener);
			 
				this.name = config.name;
				this.methods = config.actions;
			}
			return new Listener(properties);
		})();
		return AjaxRespHandler;
    });