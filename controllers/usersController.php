<?php 
class usersController extends Controller{
	function index(){

	}
	function addUser(){
		$work = new Work($_POST); 
		$frm = $work->frm;
		$userModel = $this->loadModel("Users");
		if($userModel->addUser($frm)){
			echo "Agrego";
		}else{
			echo "No agrego";
		}
	}
}
?>