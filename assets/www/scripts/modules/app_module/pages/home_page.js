/**
 * Description : Script for the applications home page.
 * Author : Rachna Khokhar
 * Date : 04-06-2013
 */

define([ 'page_layout', 
         'header_itemview', 
         'content_itemview', 
         'footer_itemview',
         'templates',
         'text_dictionary',
         'homepage_model',
         'homepage_logic'], 
		function( Page,
				  Header,
				  Content,
				  Footer,
				  Templates,
				  Text_Dict,
				  HomePageModel,
				  HomePage_BusnLogic) {
	console.log("Success..Inside Home Page.");
	var Page_Index = {};
	Page_Index.page = (function(){
		var _pageName = Text_Dict.homepage_name;
		return _pageLayout = Page.pageLayout({
			name:_pageName,
			headerView: 	Header.headerView({name:_pageName, title:Text_Dict.homepage_header}),
			contentView: 	Content.contentView({name:_pageName, template: Templates.content_home, model: new HomePageModel(), busn_logic: HomePage_BusnLogic}),
			footerView: 	Footer.footerView({name:_pageName, title:Text_Dict.homepage_footer})
		});
	})();
	
	return Page_Index;
});