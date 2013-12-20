function functionAjax(frm,target){
	$.ajax({
		type:'POST',
		url: frm.attr("href"),
		data:{
			hola: "mundo"
		},
		beforeSend:function(){
			$(target).empty().append("espere");
		},
		success:function(datos){
			$(target).empty().append("nice");	
		}
	});
	return false;
}