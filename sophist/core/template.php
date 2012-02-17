<?php 
	$arr = array('1'=>'Zoomline3','2'=>'test');
	if(isset($_GET['page'])){
		$pid = $_GET['page'];
		$pageName = $arr[$pid];
		require_once '../'.$pageName.'.php';
	}
?>