/**
 * Description : Script for the applications home page business logic. Author :
 * Rachna Khokhar Date : 05-06-2013
 */

define([ 'marionette', 'app', 'ajaxRequestHandler', 'ajaxResponseHandler', 'jshashtable', 'constants', 'app_dictionary' ], function(Marionette, App, 
		AjaxReqHandler, AjaxRespHandler, Hashtable, Constants, AppDict) {
	console.log("Success..Inside remote handler.");
	var Remote_Controller = {};
	
	Remote_Controller.HandleEvents = function() {
		return new (Marionette.Controller.extend({
			initialize : function() {
				console.log("Success..Initializing");
				this.listenTo(App, "remote:login:validate",	this.onRemoteLoginValidate);
			},
			onRemoteLoginValidate : function(options) {
				console.log("Inside...Remote Login Validate..");
				console.log('logindata='+options.requestdata);
				
				var hash = new Hashtable();
				hash.put( Constants.TAG_REQID, AppDict.LOGIN_REQ_ID );
				var tempIdata = Constants.TEXT_LOGIN + ',' + options.requestdata;
				hash.put( Constants.TAG_IDATA, tempIdata );
				
				var requestData = this.getRequestData({hashtable:hash});				
				var data = "xml=" + "<" + Constants.TAG_PIM2RREQ_INFO + ">" + requestData + "</" + Constants.TAG_PIM2RREQ_INFO + ">";
				console.log('final request data=='+data);
				
				var netHandler = new AjaxReqHandler(AjaxRespHandler.loginResponseHandler);
				netHandler.setUrl(Constants.SERVICE_URL);
				netHandler.setRequestType( AjaxReqHandler.HTTP_GET );
				netHandler.setContentType(Constants.CONTENT_TYPE);
				netHandler.setDataType(Constants.DATA_TYPE);
				netHandler.setRequestData(data);
				netHandler.execute();
			},
			
			getRequestData : function(options) {
				console.log('I am inside get request data');
				var hash = options.hashtable;
				hash.put( Constants.TAG_APPID, AppDict.APP_ID );
				hash.put( Constants.TAG_IMEI, AppDict.IMEI );
				hash.put( Constants.TAG_PNUM, AppDict.PNUM );
				hash.put( Constants.TAG_MSISDN, AppDict.MSISDN );
				hash.put( Constants.TAG_CUST_TYPE, AppDict.CUST_TYPE );
				hash.put( Constants.TAG_TRANSID, AppDict.TRANS_ID );
				hash.put( Constants.TAG_LANG, AppDict.LANG  );
				hash.put( Constants.TAG_DEVICE_LEVEL, AppDict.DEVICE_LEVEL );
				return this.getXmlFormatRequestData({hashtable:hash});
			},
			
			getXmlFormatRequestData : function(options) {
				console.log('I am inside get xml format request data');
				var requestData = "";
				var key = null;
				var value = null;
				var hash = options.hashtable; 
				hash.each(function(key, value) {
					requestData += "<" + key + ">" + value + "</" + key + ">";
				});	
				console.log('request data='+requestData);
				return requestData;
			}
		}));
	}
	return Remote_Controller;
});