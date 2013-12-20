function frmAjax(frm,target){
	$.ajax({
		type:'POST',
		url: frm.attr("action"),
		data: frm.serialize(),
		beforeSend:function(){
			$(target).empty().append("espere");
		},
		success:function(datos){
			$(target).empty().append(datos);	
		}
	});
	return false;
}
function functionAjax(frm,target){
	$.ajax({
		type:'POST',
		url: frm.attr("href"),
		data:{
			ajax : true
		},
		beforeSend:function(){
			$(target).empty().append("espere");
		},
		success:function(datos){
			$(target).empty().append(datos);	
		}
	});
	return false;
}