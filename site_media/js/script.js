$(document).ready(function(){
	// $("#addOp").AjaxClick("bodyPlace");
	$("#addOp").click(function(e){
		var str = document.URL;
		str = str.substring(str.search("main"),str.length);
		alert(str);
		if(str == "main/"){
			window.history.pushState("","Agregar usuario","addUsers");	
		}
		functionAjax($(this),"#bodyPlace");
		return false;
	});
});