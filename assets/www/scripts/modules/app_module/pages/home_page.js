/**
 * Description : Script for the applications home page.
 * Author : Rachna Khokhar
 * Date : 04-06-2013
 */

define([ 'page_layout', 
         'header_itemview', 
         'content_itemview', 
         'footer_itemview',
         'templates'], 
		function( Page,
				  Header,
				  Content,
				  Footer,
				  Templates) {
	console.log("Success..Inside Index Page.");
	var Page_Index = {};
	Page_Index.page = (function(){
		var _pageName = 'home';
		return _pageLayout = Page.pageLayout({
			name:_pageName,
			headerView: 	Header.headerView({name:_pageName, title:'Home Page'}),
			contentView: 	Content.contentView({name:_pageName, template: Templates.content_home}),
			footerView: 	Footer.footerView({name:_pageName, title:'HomePage Footer'})
		});
	})();
	
	return Page_Index;
});