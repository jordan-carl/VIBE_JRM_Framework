/**
 * Description : Script for the index page view.
 * Author : Rachna Khokhar
 * Date : 30-05-2013
 */
define([ 'underscore', 'marionette', 'templates' ], function( _, Marionette, templates ) {
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
				_.bindAll (this, "template");
			},
			template: function() {
				return templates.content_index;
			}
		}))(opts);
	};
	return Content;
});