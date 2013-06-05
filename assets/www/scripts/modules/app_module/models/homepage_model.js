/**
 * Description : Script for the home page model.
 * Author : Rachna Khokhar
 * Date : 05-06-2013
 */

define(['backbone', 'text_dictionary'], function(Backbone, Text_Dict) {
	var HomePageModel = Backbone.Model.extend({
		defaults:{
			lbl_enter_username : Text_Dict.lbl_enter_username
		}
	});
	return HomePageModel;
});