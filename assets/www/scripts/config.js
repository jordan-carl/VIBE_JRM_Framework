/**
 * Description : Script For Configuration Of Application.
 * Author : Rachna Khokhar
 * Date : 30-05-2013
 */

// Set the require.js configuration for your application.
require.config({
	
	// Default base url
	// baseUrl : '/scripts',
	
	// Dependencies to load as soon as require is defined.
	deps: ['../scripts/modules/app_module/main'],
	
	// Paths to various different script files.
	paths: {
	    // JavaScript folders.
	    ext_libs: '../scripts/ext_libs',
	    plugins: '../scripts/plugins',
	    assets: '../assets',

	    // External Libraries.
	    jquery: '../scripts/ext_libs/jquery',
	    underscore: '../scripts/ext_libs/underscore',
	    jquerymobile : '../scripts/ext_libs/jquery.mobile',
	    backbone: '../scripts/ext_libs/backbone',
	    marionette: '../scripts/ext_libs/backbone.marionette',
	    tpl: '../scripts/ext_libs/tpl',
	    jqm_config: '../scripts/jqm_config',
	    load_css: '../scripts/utils/load_css',
	    
	    // Main Application Module Scripts
	    app : '../scripts/modules/app_module/app',
	    viewflow_router : '../scripts/modules/app_module/routers/viewflow_router',
	    viewflow_controller : '../scripts/modules/app_module/controllers/viewflow_controller',
	    templates : '../scripts/modules/app_module/template',
	    
	    // Views
	    content_itemview : '../scripts/modules/app_module/views/content_itemview',
	    header_itemview : '../scripts/modules/app_module/views/header_itemview',
	    footer_itemview : '../scripts/modules/app_module/views/footer_itemview',
	    
	    // Pages
	    index_page : '../scripts/modules/app_module/pages/index_page',
	    home_page : '../scripts/modules/app_module/pages/home_page',
	    
	    // Models
	    indexpage_model : '../scripts/modules/app_module/models/indexpage_model',
	    homepage_model : '../scripts/modules/app_module/models/homepage_model',
	    
	    // Business Logic
	    indexpage_logic : '../scripts/modules/app_module/busn_logic/indexpage_logic',
	    homepage_logic : '../scripts/modules/app_module/busn_logic/homepage_logic',
	    
	    // Layouts
	    page_layout : '../scripts/modules/app_module/layouts/page_layout',
	    	
	    // Dictionary
	    text_dictionary : '../scripts/modules/app_module/dictionary/text_dictionary',
	    event_dictionary : '../scripts/modules/app_module/dictionary/event_dictionary',
	  },
	  
	 /*
	 * Configure the dependencies and exports for older, traditional
	 * "browser globals" scripts that do not use define() to declare the
	 * dependencies and set a module value.
	 */
	  shim: {
		    jquery: {
		      exports: '$'
		    },		    
		    underscore: {
		      exports: '_'
		    },		    
		    jqm_config : {
				deps: ['jquery']
			},
			jquerymobile : {
				deps: ['jqm_config', 'jquery'],
				exports: 'JqueryMobile'
			},
		    // Backbone library depends on underscore and jQuery.
		    backbone: {
		      deps: ['underscore', 'jquery'],
		      exports: 'Backbone'
		    },
		    //Marionette depends on backbone
		    marionette : {
				deps : [ 'backbone' ],
				exports : 'Marionette'
			}
	  },
	  
	  waitSeconds:15
});