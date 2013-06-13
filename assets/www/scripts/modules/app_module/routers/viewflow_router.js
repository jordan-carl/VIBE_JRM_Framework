/**
 * Description : Script for the application router to handle view flows.
 * Author : Rachna Khokhar
 * Date : 30-05-2013
 */

define([ 'marionette', 'viewflow_controller', 'remote_controller' ],
		function( Marionette, ViewController, RemoteController ) {
	console.log("Success...Inside Router");
			var App_Router = Marionette.AppRouter.extend({
				appRoutes : {
					'' : 'loadIndexPage',
					'index' : 'loadIndexPage',
					'home' : 'loadHomePage',
				}
			});
			return new App_Router({
				controller : ViewController
			});
		});