//UserAgent
//////////////////////////////////
var ua = {};
ua.name = window.navigator.userAgent.toLowerCase();
ua.isIE = (ua.name.indexOf('msie') >= 0 || ua.name.indexOf('trident') >= 0);
ua.isiPhone = ua.name.indexOf('iphone') >= 0;
ua.isiPod = ua.name.indexOf('ipod') >= 0;
ua.isiPad = ua.name.indexOf('ipad') >= 0;
ua.isiOS = (ua.isiPhone || ua.isiPod || ua.isiPad);
ua.isAndroid = ua.name.indexOf('android') >= 0;
ua.isTablet = (ua.isiPad || (ua.isAndroid && ua.name.indexOf('mobile') < 0));

if (ua.isIE) {//IEバージョン判別
	ua.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(ua.name);
	if (ua.verArray) {
		ua.ver = parseInt(ua.verArray[2], 10);
	}
}
if (ua.isiOS) {//iOSバージョン判別
	ua.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(ua.name);
	if (ua.verArray) {
		ua.ver = parseInt(ua.verArray[2], 10);
	}
}
if (ua.isAndroid) {//Andtoidバージョン判別
	ua.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(ua.name);
	if (ua.verArray) {
		ua.ver = parseInt(ua.verArray[2], 10);
	}
}

//$(document).ready();
//////////////////////////////////
jQuery(function($){


//SNS
//////////////////////////////////
//Facebook javascript SDK (async)
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id; js.async = true;
	js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1";
	//js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=XXXXXXXXXXXXXXX";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Twitter
!function(d,s,id){
	var js,fjs = d.getElementsByTagName(s)[0];
	if(!d.getElementById(id)){
		js = d.createElement(s); js.id = id; js.src = "//platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document,"script","twitter-wjs");

//Google +1
window.___gcfg = {lang: 'ja'};
(function() {
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();



});//jQuery(function($){}); END