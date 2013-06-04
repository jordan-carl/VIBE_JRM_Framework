/**
 * Description : Script for common page layout of html page.
 * Author : Rachna Khokhar
 * Date : 30-05-2013
 */

define([ 'underscore', 'marionette' ], function( _, Marionette ) {
	console.log("Success..Inside Index View.");
	var Page = {};
	var _ReplaceWithRegion = Marionette.Region.extend({
		 open: function(view){
		 	//Need this to keep Panel/Header/Content/Footer at the same level for panel to work properly
	        this.$el.replaceWith(view.el);
		}
	});
	Page.pageLayout = function (opts) {
		var _opts = _.extend ({	name: 'noname',
								headerView: null,
								contentView: null, 
								footerView: null,								
								}, opts);
		return new ( Marionette.Layout.extend({
			tagName: 'section', 
			attributes: function() {
				return {
					'id': 			'page_' + _opts.name,
					'data-url': 	'page_' + _opts.name,
					'data-role': 	'page',
					'data-theme':   'a'
				};
			},
			template: function () {	
				return "<div region_id='header'/><div region_id='content'/><div region_id='footer'/>";
			},
			regions: {
			  header:	{selector: "[region_id=header]",	regionType: _ReplaceWithRegion},
			  content:	{selector: "[region_id=content]",	regionType: _ReplaceWithRegion},
			  footer:	{selector: "[region_id=footer]",	regionType: _ReplaceWithRegion},
			},

			initialize: function(){
				$('body').append(this.$el);
				this.render();
			},				
			onRender: function() {
				if (this.options.headerView) {
					this.header.show (this.options.headerView);
				};
				if (this.options.contentView) {
					this.content.show(this.options.contentView);
				};
				if (this.options.footerView) {
					this.footer.show (this.options.footerView);
				};
			},
		}))(_opts);
	};
	return Page;
});