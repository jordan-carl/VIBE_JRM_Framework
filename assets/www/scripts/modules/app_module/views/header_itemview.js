/**
 * Description : Script for the application router to handle view flows. Author :
 * Rachna Khokhar Date : 30-05-2013
 */

define([ 'underscore', 'marionette', 'templates' ], function( _, Marionette, templates ) {
	console.log("Success..Inside Header View.");
	var Header = {};
	Header.headerView = function (opts) {
		return new  (Marionette.ItemView.extend({
			tagName: 'header', 
			attributes: function() {
				return {
					'region_id': 				'header',						
					'id': 						'header_' + opts.name,
					'data-role': 				'header',
					'data-position': 			'fixed',
					'data-tap-toggle': 			'false',
					'data-update-page-padding': 'false'					
				};
			},
			initialize: function () {
				_.bindAll (this, "template");
			},				
			template: function() {
				return templates.header({header:opts.title});
			}
		}))(opts);
	};
	return Header;
});