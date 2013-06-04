/**
 * Description : Script for the footer item view.
 * Author : Rachna Khokhar
 * Date : 30-05-2013
 */

define([ 'underscore', 'marionette', 'templates' ], function( _, Marionette, templates ) {
	console.log("Success..Inside Footer View.");
	var Footer = {};
	Footer.footerView = function (opts) {
		return new  (Marionette.ItemView.extend({
			tagName: 'footer', 
			attributes: function() {
				return {
					'region_id': 				'footer',						
					'id': 						'footer_' + opts.name,
					'data-role': 				'footer',
					'data-id': 					'footer_fixed',
					'data-position': 			'fixed',
					'data-tap-toggle': 			'false'
				};
			},
			initialize: function () {
				_.bindAll (this, "template");
			},		
			template: function() {
				return templates.footer({footer: opts.title});
			}
		}))(opts);
	};
	return Footer;
});