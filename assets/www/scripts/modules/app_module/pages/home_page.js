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
         'text_dictionary'], 
		function( Page,
				  Header,
				  Content,
				  Footer,
				  Templates,
				  Text_Dict) {
	console.log("Success..Inside Index Page.");
	var Page_Index = {};
	Page_Index.page = (function(){
		var _pageName = Text_Dict.homepage_name;
		return _pageLayout = Page.pageLayout({
			name:_pageName,
			headerView: 	Header.headerView({name:_pageName, title:Text_Dict.homepage_header}),
			contentView: 	Content.contentView({name:_pageName, template: Templates.content_home}),
			footerView: 	Footer.footerView({name:_pageName, title:Text_Dict.homepage_footer})
		});
	})();
	
	return Page_Index;
});