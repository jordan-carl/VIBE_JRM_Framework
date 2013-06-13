/**
 * Description : Interface Script for handling response received from network activities.
 * Author : Rachna Khokhar
 * Date : 11-06-2013
 */

define(['interfaceJS'],
    function (Interface) {
		console.log("Success...I am inside INetworkListener interface.");
		var INetworkListener = new Interface('INetworkRespListener', ['onSuccess', 'onError', 'onException', 'onComplete']);
		return INetworkListener;
    });