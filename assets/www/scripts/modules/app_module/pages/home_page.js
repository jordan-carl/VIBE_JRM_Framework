/**
 * Description : Script for the applications home page.
 * Author : Rachna Khokhar
 * Date : 04-06-2013
 */

define([ 'page_layout', 
         'header_itemview', 
         'index_contentview', 
         'footer_itemview' ], 
		function( Page,
				  Header,
				  Content,
				  Footer) {
	console.log("Success..Inside Index Page.");
	var Page_Index = {};
	Page_Index.page = (function(){
		var _pageName = 'index';
		return _pageLayout = Page.pageLayout({
			name:_pageName,
			headerView: 	Header.headerView({name:_pageName, title:'Welcome to the Index Page'}),
			contentView: 	Content.contentView({name:_pageName}),
			footerView: 	Footer.footerView({name:_pageName, title:'IndexPage Footer'})
		});
	})();
	
	return Page_Index;
});