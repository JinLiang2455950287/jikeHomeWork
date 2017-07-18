<?php
header("Content-type:application/json;charset=utf-8");
	
	require_once('db.php');
	
	if($link){
		$newstitle=$_POST['newstitle'];
		$newstype=$_POST['newstype'];
		$newimg=$_POST['newimg'];
		$newstime=$_POST['newstime'];
		$newssrc=$_POST['newssrc'];
		
		$sql="INSERT INTO `news` (`newstitle`,`newstype`,`newimg`,`newstime`,`newssrc`)
		VALUES ('{$newstitle}','{$newstype}','{$newimg}','{$newstime}','{$newssrc}')";
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);
		echo json_encode(array("success"=>"ok"));
		
	}
?>