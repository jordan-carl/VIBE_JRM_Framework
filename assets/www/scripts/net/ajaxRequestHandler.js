/**
 * Description : Script for handling network activities.
 * Author : Rachna Khokhar
 * Date : 10-06-2013
 */

define(['jquery', 'INetworkListener'],
    function ($, INetListener) {
		console.log("Success...I am inside ajaxRequestHandler.");
		function AjaxRequestHandler (listener) {
			
			AjaxRequestHandler.HTTP_GET = 'GET';
			AjaxRequestHandler.HTTP_POST = 'POST';
			
			this.crossDomain = true;
			this.timeout = 60000;
			this.listener = listener;
			
			this.setUrl = function(url){
				console.log('ServerURL='+url);
				this.serverUrl = url;
			};
			this.setRequestData = function(requestData){
				console.log('requestData='+requestData);
				this.requestData = requestData;
			};			
			this.setDataType = function(dataType){
				console.log('dataType='+dataType);
				this.dataType = dataType;
			};
			this.setContentType = function(contentType){
				console.log('contentType='+contentType);
				this.contentType = contentType;
			};
			this.setRequestType = function(requestType){
				console.log('requestType='+requestType);
				this.requestType = requestType;
			};
			this.setCrossDomain = function(crossDomain){
				console.log('crossDomain='+crossDomain);
				this.crossDomain = crossDomain;
			};
			this.setTimeout = function(timeout){
				console.log('timeout='+timeout);
				this.timeout = timeout;
			};
			this.execute = function(){
				console.log('Inside Execute=='+this.crossDomain);
				$.ajax({
			       	type : this.requestType,
			        url : this.serverUrl,
				  	data : this.requestData,        
			        dataType : this.dataType,
			        contentType : this.contentType,
					crossDomain : this.crossDomain,
			        timeout : this.timeout,
			        success : function( data, textStatus, jqXHR ){
			        	console.log('Server response='+data+' textStatus='+textStatus);
			        	listener.methods.onSuccess( data, textStatus, jqXHR );
			        },
			        error : function( jqXHR, textStatus, errorThrown ){
			        	console.log('textStatus='+textStatus+' errorThrown='+errorThrown);
			        	listener.methods.onError( jqXHR, textStatus, errorThrown );
			        },
			        complete : function( jqXHR, textStatus ){
			        	listener.methods.onComplete( jqXHR, textStatus );
			        }
		          });
			}
		}
		return AjaxRequestHandler;
    });