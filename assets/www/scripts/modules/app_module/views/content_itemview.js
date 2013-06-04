/**
 * Description : Script for the index page content view.
 * Author : Rachna Khokhar
 * Date : 30-05-2013
 */
define([ 'underscore', 'marionette' ], function( _, Marionette ) {
	console.log("Success..Inside Content Index View.");
	var Content = {};
	Content.contentView = function (opts) {
		return new  (Marionette.ItemView.extend({
			tagName: 'article', 
			attributes: function() {
				console.log('options name=='+opts.name);
				return {
					'region_id': 				'content',						
					'id': 						'content_' + opts.name,
					'data-role': 				'content'
				};
			},
			initialize: function () {
				_.bindAll (this, "template", "busn_logic");
			},
			template: function() {
				return opts.template;
			},
			model : function() {
				console.log("i m inside model");
				return opts.model;
			},
			busn_logic : function() {
				console.log("i m inside busn logic");
				return opts.busn_logic;
			}
		}))(opts);
	};
	return Content;
});