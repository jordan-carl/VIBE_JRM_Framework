/**
 * Description : Script to retrieve templates from a common file.
 * Author : Rachna Khokhar
 * Date : 30-05-2013
 */

define(function(require) {
	console.log("Inside...TemplateJS.");
	return {
		content_index : require('tpl!../scripts/modules/app_module/templates/content_index.tmpl'),
		header : require('tpl!../scripts/modules/app_module/templates/header.tmpl'),
		footer : require('tpl!../scripts/modules/app_module/templates/footer.tmpl'),
	};
});