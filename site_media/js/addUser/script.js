$(document).ready(function(){
	$("#birthdayFrm").datepicker();
	$("#addUserForm").submit(function(){
		frmAjax($(this),"#addUserResult");
		// $("#addUserResult").empty().append("hola");
		return false;
	})
	
});