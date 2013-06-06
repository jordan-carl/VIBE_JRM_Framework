/**
 * Description : Script to load required css files. 
 * Author : Rachna Khokhar 
 * Date : 06-06-2013
 */

define([],
    function () {
		console.log("Success...I am inside load css.");
		loadCss ('../www/assets/css/jquery.mobile-1.3.1.css');
		
		/*
		* loadCss
		*/
		function loadCss(url) {
			console.log("Success...Loading CSS");
		    var link = document.createElement("link");
		    link.type = "text/css";
		    link.rel = "stylesheet";
		    link.href = url;
		    document.getElementsByTagName("head")[0].appendChild(link);
		    console.log("Success...CSS Loaded");
		}
    });