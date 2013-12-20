<?php 
class mainController extends Controller{
	function index(){
		$this->view->render("main");
	}
	function addUsers($ajax=""){
		if($ajax = ""){
			echo "nice";	
		}else{
			$this->view->render("main");
		}
		
	}
}
?>