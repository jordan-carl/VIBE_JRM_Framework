/**
 * Description : Script for the index page model.
 * Author : Rachna Khokhar
 * Date : 04-06-2013
 */

define(['backbone', 'text_dictionary'], function(Backbone, Text_Dict) {
	var IndexPageModel = Backbone.Model.extend({
		defaults:{
			val_btn_gotohomepage : Text_Dict.btn_gotohomepage,
			val_btn_gotologinpage : Text_Dict.btn_gotologinpage
		}
	});
	return IndexPageModel;
});