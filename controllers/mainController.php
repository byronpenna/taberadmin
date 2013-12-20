<?php 
class mainController extends Controller{
	function index(){
		$vars = new stdClass();
		$vars->contentBodyPlace = "";
		$this->view->render("main",$vars);
	}
	function addUsers(){
		$work = new Work($_POST); 
		$frm = $work->frm;
		if(@$frm->ajax){
			$this->view->render("addUser");
		}else{
			$vars = new stdClass();
			$vars->contentBodyPlace = $this->view->render("addUser",null,true);
			$this->view->render("main",$vars);
		}
	}
}
?>