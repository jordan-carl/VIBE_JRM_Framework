/**
 * Description : Script for the home page model.
 * Author : Rachna Khokhar
 * Date : 05-06-2013
 */

define(['backbone', 'text_dictionary'], function(Backbone, Text_Dict) {
	var HomePageModel = Backbone.Model.extend({
		defaults:{
			lbl_enter_username : Text_Dict.lbl_enter_username,
			lbl_enter_password : Text_Dict.lbl_enter_password,
			val_btn_loginsubmit : Text_Dict.val_btn_loginsubmit
		}
	});
	return HomePageModel;
});