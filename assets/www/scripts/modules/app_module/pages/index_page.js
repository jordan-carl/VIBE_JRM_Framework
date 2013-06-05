/**
 * Description : Script for the applications index page.
 * Author : Rachna Khokhar
 * Date : 30-05-2013
 */

define([ 'page_layout', 
         'header_itemview', 
         'content_itemview', 
         'footer_itemview',
         'templates',
         'text_dictionary',
         'indexpage_model',
         'indexpage_logic'], 
		function( Page,
				  Header,
				  Content,
				  Footer,
				  Templates,
				  Text_Dict,
				  IndexPageModel,
				  BusnLogic) {
	console.log("Success..Inside Index Page.");
	var Page_Index = {};
	Page_Index.page = (function(){
		var _pageName = Text_Dict.indexpage_name;
		
		var _pageLayout = Page.pageLayout({
			name:_pageName,
			headerView: 	Header.headerView({name:_pageName, title:Text_Dict.indexpage_header}),
			contentView: 	Content.contentView({name:_pageName, template: Templates.content_index, model: new IndexPageModel(), busn_logic : BusnLogic }),
			footerView: 	Footer.footerView({name:_pageName, title:Text_Dict.indexpage_footer})
		});
		return _pageLayout;
	})();
	
	return Page_Index;
});