/**
 * Description : Script to kick start the application.
 * Author : Rachna Khokhar
 * Date : 30-05-2013
 */

define([ "load_css", "jquery", "jqm_config", "jquerymobile", "underscore", "app", "viewflow_router", ], 
		function(LoadCSS, $, JQM_Config, JQM, _, App, App_Router) {
	console.log("Success...Inside Main");
	$(document).ready(function () {
		console.log("Success...Inside Main Document Ready");
		App.Router = App_Router;
		App.start();
	});
});
